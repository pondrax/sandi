<?php

namespace App\Jobs;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;


use App\Events\SignedEvent;
use App\Models\User;
use App\Models\Dokumen;

class SignDokumen implements ShouldQueue
{
  use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

  protected $dokumen;
  protected $data;
  protected $response;

  /**
   * Create a new job instance.
   *
   * @return void
   */
  public function __construct($dokumen, $data)
  {
    $this->dokumen = $dokumen;
    $this->data    = $data;
  }

  /**
   * Execute the job.
   *
   * @return void
   */
  public function handle($withEvent = true)
  {
    $dokumen = $this->dokumen;
    $data   = $this->data;
    MarkDokumen::dispatchSync($dokumen, $data);
    
    $dokumenSource = Dokumen::find($dokumen->id);
    $source = $dokumenSource->file;
    $sign   = $dokumen->sign + 1;
    $client = Http::timeout(1000000)->baseUrl(env('ESIGN_URL'))->withBasicAuth(env('ESIGN_USER'), env('ESIGN_PASS'));
    
    // if(isset($data['spesimen'])){
    //   $imageTTD = storage_path("app/$data[spesimen]");
    //   $client->attach('imageTTD', fopen($imageTTD,'r'));
    //   $data['image']    = 'true';
    //   $data['tampilan'] = 'visible';
    // }else{
      $data['tampilan'] = 'invisible';
    // }

    $client->attach('file', fopen(storage_path('app/'.$source),'r'));
    
    $response = $client->post('/api/sign/pdf', $data);
    // @unlink($imageTTD);
    if($response->failed()){
      Log::warning($response->json());
      return $this->failed($response->json(), $withEvent);
    }
    $source = explode('_sign', str_replace('.pdf','',$source))[0] . '_sign' . $sign . '.pdf';
    
    Storage::put($source, $response);
    
    $penandatanganId = User::whereEmail($dokumen->penandatangan)->value('id');
    $dokumen->update([
      'penandatangan'=>null,
      'file'  => $source,
      'sign'  => $sign,
    ]);
    $dokumen->history()->create([
      'penandatangan_id' => $penandatanganId,
      'file' => $source,
      'nama' => $dokumen->nama,
      'status' => $data['status'],
    ]);
    
    // echo json_encode($dokumen);
    $to = [
      $data['to'],
      $penandatanganId
    ];
    if($withEvent){
      event(new SignedEvent(array_unique($to),[
        'message' => 'Tandatangan Berhasil',
        'id' => $dokumen->id,
        'nama' => $dokumen->nama,
      ]));
    }
    return $dokumen;
  }
  public function failed($error, $withEvent=true)
  {
    if($withEvent){
      $to = [
        $this->data['to']
      ];
      $error['message'] = 'Tandatangan Gagal';
      event(new SignedEvent($to,$error));
    }
    return $error;
  }
}
