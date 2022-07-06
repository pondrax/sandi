<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DokumenController;
use App\Http\Controllers\PenandatanganController;
use App\Http\Controllers\App\ProfileController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/**
 * @group 
 */
Route::middleware('auth:sanctum')->group(function(){
  
  // Route::get('/user', function (Request $request) {
  //   return $request->user();
  // });
  
  Route::get('/penandatangan', [PenandatanganController::class, 'index']);
  Route::get('/profile', [ProfileController::class, 'index']);
  Route::put('/profile', [ProfileController::class, 'update']);

  Route::get('/dokumen/stats', [DokumenController::class, 'stats']);
  Route::get('/dokumen/{id}', [DokumenController::class, 'read']);
  Route::post('/dokumen', [DokumenController::class, 'store']);
  Route::put('/dokumen/{id}', [DokumenController::class, 'update']);
  Route::post('/dokumen/sign', [DokumenController::class, 'sign']);
  Route::delete('/dokumen/{id}', [DokumenController::class, 'destroy']);

});
