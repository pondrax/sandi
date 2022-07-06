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
class UserController extends Controller
{    
  
  /**
   * Get Penandatangan
   * 
   * Get detail User Penandatangan
   */
  public function index()
  {
    $email = request('email');
    $data = User::where('email', $email)->paginate();
    return response()->json([
      'message' => 'success',
      'data'    => $data
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