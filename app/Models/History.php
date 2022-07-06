<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;

class History extends Model
{

  protected $table = 'history';
  
  protected $fillable = [
    'file',
    'nama',
    'penandatangan_id',
    'status',
    'keterangan',
  ];
  protected $with = ['penandatangan'];

  public function dokumen()
  {
    return $this->belongsTo(Dokumen::class, 'id', 'dokumen_id');
  }  
  public function penandatangan()
  {
    return $this->belongsTo(User::class, 'penandatangan_id', 'id');
  }
}
