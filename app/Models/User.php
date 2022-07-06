<?php

namespace App\Models;

use App\Traits\Uuid;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
  use Uuid, HasApiTokens, HasFactory, Notifiable;

  /**
   * The attributes that are mass assignable.
   *
   * @var array<int, string>
   */
  protected $fillable = [
    'name',
    'email',
    'email_verified_at',
    'password',
    'nik',
    'nip',
    'telepon',
    'avatar',
    'jabatan',
    'golongan',
    'unit_kerja',
    'status',
  ];

  /**
   * The attributes that should be hidden for serialization.
   *
   * @var array<int, string>
   */
  protected $hidden = [
    // 'id',
    'password',
    'remember_token',
  ];

  /**
   * The attributes that should be cast.
   *
   * @var array<string, string>
   */
  protected $casts = [
    'email_verified_at' => 'datetime',
  ];

  protected $appends = ['pangkat'];

  public $daftarPangkat = [
    ['golongan'=>'-', 'pangkat'=> '-'],
    ['golongan'=>'I/a', 'pangkat'=> 'Juru Muda'],
    ['golongan'=>'I/b', 'pangkat'=> 'Juru Muda Tingkat I'],
    ['golongan'=>'I/c', 'pangkat'=> 'Juru'],
    ['golongan'=>'I/d', 'pangkat'=> 'Juru Tingkat I'],
    ['golongan'=>'II/a', 'pangkat'=> 'Pengatur Muda'],
    ['golongan'=>'II/b', 'pangkat'=> 'Pengatur Muda Tingkat I'],
    ['golongan'=>'II/c', 'pangkat'=> 'Pengatur'],
    ['golongan'=>'II/d', 'pangkat'=> 'Pengatur Tingkat I'],
    ['golongan'=>'III/a', 'pangkat'=> 'Penata Muda'],
    ['golongan'=>'III/b', 'pangkat'=> 'Penata Muda Tingkat I'],
    ['golongan'=>'III/c', 'pangkat'=> 'Penata'],
    ['golongan'=>'III/d', 'pangkat'=> 'Penata Tingkat I'],
    ['golongan'=>'IV/a', 'pangkat'=> 'Pembina'],
    ['golongan'=>'IV/b', 'pangkat'=> 'Pembina Tingkat I'],
    ['golongan'=>'IV/c', 'pangkat'=> 'Pembina Utama Muda'],
    ['golongan'=>'IV/d', 'pangkat'=> 'Pembina Utama Madya'],
    ['golongan'=>'IV/e', 'pangkat'=> 'Pembina Utama'],
  ];  
  
  
  protected function pangkat(): Attribute
  {
    return new Attribute(
      get: fn($value, $attributes) => $this->daftarPangkat[array_search($attributes['golongan']??'-', array_column($this->daftarPangkat,'golongan'))]['pangkat'],
      set: fn($value) => $value,
    );
  }
  protected function password(): Attribute
  {
    return new Attribute(
      get: fn($value) => $value,
      set: fn($value) => bcrypt($value),
    );
  }
}
