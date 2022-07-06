<?php
 
namespace App\Http\Controllers\App;

use App\Models\User;
use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Support\Facades\Http;

/**
 * @group User Profile
 * 
 * @authenticated
 */
class ProfileController extends Controller
{    
  
  /**
   * Get Profile
   * 
   * Get detail User Profile
   */
  public function index()
  {
    $data = auth()->user();
    return response()->json([
      'message' => 'success',
      'data'    => $data,
      'golongan' => (new User)->daftarPangkat
    ]);
  }
  
  /**
   * Update Profile
   * 
   * Update User Profile
   */
  public function update(ProfileUpdateRequest $request)
  {
    $data = $request->validated();
    
    $getStatus = Http::baseUrl(env('ESIGN_URL'))
      ->withBasicAuth(env('ESIGN_USER'), env('ESIGN_PASS'))
      ->get('api/user/status/' . $data['nik']);
    
    if($dataStatus = $getStatus->json()){
      $data['status'] = $dataStatus['status'];
    }
    // var_dump($data);
    $user = auth()->user();
    $user->update($data);
    
    return response()->json([
      'message' => 'Updated',
      'data'    => $user
    ]);
  }
}