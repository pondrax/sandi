<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\App\AuthController;
use App\Http\Controllers\App\OauthController;
use App\Http\Controllers\DokumenController;
use chillerlan\QRCode\{QRCode, QROptions};

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/test', function () {
  
  $options = new QROptions([
    'version'      => 5,
    'quietzoneSize'	=> 0,
  ]);
  $qr = (new QRCode($options))->render(url('d/5e4d6ff3-6a6c-49c6-9da4-1d3c660ac113'));
  echo "<img src='$qr' width=40>";
  return view('welcome');
});

Route::post('/auth/login', [AuthController::class,'login']);
Route::post('/auth/register', [AuthController::class,'register']);

Route::get('/auth/{provider}', [OauthController::class, 'redirect']);
Route::get('/auth/{provider}/callback', [OauthController::class, 'callback']);

Route::post('/dokumen/verify', [DokumenController::class, 'verify']);
Route::post('/dokumen/{id}', [DokumenController::class, 'preview']);

