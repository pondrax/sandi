<?php
 
namespace App\Http\Controllers;

use setasign\Fpdi\Fpdi;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

use App\Http\Requests\DokumenStoreRequest;
use App\Http\Requests\DokumenSignRequest;
use App\Models\Dokumen;
use App\Models\User;

use App\Jobs\SignDokumen;
use App\Jobs\MarkDokumen;
use App\Events\SignedEvent;
use App\Http\Requests\DokumenUpdateRequest;
use App\Models\History;
use Illuminate\Support\Facades\Hash;

/**
 * @group Sign Document
 * 
 * @authenticated
 */
class DokumenController extends Controller
{    
  protected $paperSize = [
    'F4' => [330,210],
    'A4' => [295,210],
  ];

  protected $uploadPath = 'public/sign/data';

  public function stats()
  {
    $user = auth()->user();
    $stats = [
      'diupload' => Dokumen::where('user_id', $user->id)->count(),
      'pengajuan' => Dokumen::where('penandatangan', $user->email)->count(),
      'ditandatangani' => Dokumen::whereHas('history', function($q)use($user){
        $q->where('status','Tandatangan');
        $q->where('penandatangan_id', $user->id);
      })->count(),
      'dibagikan' => Dokumen::where('user_id', $user->id)->sum('view')
    ];
    // $response = Dokumen::find($response->id);
    return response()->json([
      'message' => 'Stats loaded successfully',
      'data' => $stats
    ]);

  }

  public function preview($id){
    // var_dump(request('pass'));
    $response = Dokumen::with('history')->find($id);
    if($response){
      if($response->password){
        $pass = request('pass');
        if(!Hash::check(request('pass'), $response->password)){
          $response = [
            'rahasia'=>true,
            'message'=> $pass == null? '': 'Password tidak sesuai'
          ];
        }
      }else{
        $response->increment('view');
      }
    }
    return response()->json([
      'message' => 'Data loaded successfully',
      'data' => $response
    ]);
  }

  
  public function verify(){
    // var_dump(request('pass'));
    $response = ['verified'];
    return response()->json([
      'message' => 'Data loaded successfully',
      'data' => $response
    ]);
  }

  
  /**
   * List Document
   * 
   * List current user document
   */
  public function read($id = 'user')
  {
    $user = auth()->user();
    if($id == 'penandatangan'){
      $response = Dokumen::with('history')
                  ->where('penandatangan', $user->email)
                  ->orderBy('created_at','desc')
                  ->paginate();
    }elseif($id == 'ditandatangani'){
      $response = Dokumen::with('history')
                  ->whereHas('history', function($q)use($user){
                    $q->where('status','Tandatangan');
                    $q->where('penandatangan_id', $user->id);
                  })
                  ->orderBy('created_at','desc')
                  ->paginate();
    }else{
      $response = Dokumen::with('history')
                  ->where('user_id', $user->id)
                  ->orderBy('created_at','desc')
                  ->paginate();
    }
    // $response = Dokumen::find($response->id);
    return response()->json([
      'message' => 'Data loaded successfully',
      'data' => $response
    ]);
    
  }

  /**
   * Upload Document
   * 
   * Upload document to be signed
   */
  public function store(DokumenStoreRequest $request)
  {
    $data = $request->validated();
    $data['user_id'] = auth()->user()->id;
    $response = Dokumen::create($data);
    $response->history()->create([
      'penandatangan_id' => $data['user_id'],
      'file' => $data['file'],
      'nama' => $data['nama'],
      'status' => 'Draft',
    ]);
    // $response = Dokumen::find($response->id);
    return response()->json([
      'message' => 'Data added successfully',
      'data' => $response
    ]);
    
  }
  
  /**
   * Update Document
   * 
   * Update document property
   */
  public function update(DokumenUpdateRequest $request, $id)
  {
    $data = $request->validated();
    $response = Dokumen::find($id);
    if(isset($data['penandatangan']) && $data['penandatangan'] != auth()->user()->email ){
      $response->history()->create([
        'penandatangan_id' => User::whereEmail($data['penandatangan'])->value('id'),
        'file' => $response->file,
        'nama' => $response->nama,
        'status' => 'Pengajuan',
      ]);
    }
    // var_dump($data);
    $response->update($data);
    return response()->json([
      'message' => 'Data updated successfully',
      'data' => $response
    ]);
  }
  /**
   * Sign Document
   * 
   * Insert signature to Document
   */
  public function sign(DokumenSignRequest $request)
  {
    $data = $request->validated();

    $dokumenIds = explode(',', $data['dokumen_id']);
    $dokumen = Dokumen::findMany($dokumenIds);
    if(!$dokumen){
      return response()->json(['message'=>'Invalid Document'], 403);
    }
    $data['nik'] = auth()->user()->nik;
    $data['to']  = auth()->user()->id;
    $d = $dokumen->shift();
    // Process first doc
    // MarkDokumen::dispatchSync($d, $data);
    $response = (new SignDokumen($d, $data))->handle();
        
    if(isset($response['error'])){
      return response()->json([
        'message' => "Tandatangan Gagal",
        'data'    => $response
      ], 422); 
    }

    // Run signing on background
    $dokumen->each(function($d, $key) use($data){
      SignDokumen::dispatch($d, $data);
    });
    return response()->json([
      'message' => 'Tandatangan Berhasil',
      'data'    => $dokumen
    ]);
  }

  /**
   * Destroy document
   * 
   * Delete saved document 
   */
  public function destroy($id){
    $dokumenIds = explode(',', $id);
    $dokumen = Dokumen::findMany($dokumenIds);
    $dokumen->each(function($d, $key){
      $d->history()->delete();
      $path = storage_path('app/'.explode('_',str_replace('_mark','',$d->file))[0]);
      $files = glob($path.'*');      
      foreach($files as $file){ // iterate files
        if(is_file($file)){
          unlink($file); 
        }
      }
      $d->delete();
    });
    return response()->json([
      'message' => 'Data deleted successfully'
    ]);
  }
}