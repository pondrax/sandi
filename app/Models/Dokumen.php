<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Casts\AsCollection;


class Dokumen extends Model
{

  protected $table = 'documents';
  
  protected $fillable = [
    'user_id',
    'file',
    'nama',
    'nomor',
    'deskripsi',
    'sign',
    'mark',
    'size',
    'penandatangan',
    'spesimen',
    'password',
    'tanggal'
  ];
  protected $hidden = [
    // 'id',
    'password',
    'remember_token',
  ];

  protected $casts = [
    'spesimen' => AsCollection::class,
  ];

  protected function password(): Attribute
  {
    return new Attribute(
      get: fn($value) => $value,
      set: fn($value) => bcrypt($value),
    );
  }
  public function history()
  {
    return $this->hasMany(History::class, 'dokumen_id', 'id')->orderBy('created_at','desc');
  }
  protected function spesimen(): Attribute
  {
    return new Attribute(
      // get: fn($value) => ($value),
      set: fn($value) => $value,
    );
  }
}
