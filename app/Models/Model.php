<?php

namespace App\Models;

use App\Traits\Uuid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Illuminate\Database\Eloquent\Model as BaseModel;
use Awobaz\Compoships\Database\Eloquent\Model as BaseModel;

class Model extends BaseModel
{
  use Uuid, HasFactory;

  protected static function boot()
  {
    parent::boot();

    self::creating(function ($model) {
      $model->id = str()->uuid()->toString();
      // if($user = auth()->user()){
      //   $model->user_id = $user->id;
      // }
    });

    static::retrieved(function($model) {
  //var_dump($model->id);
    });

    static::retrieved(function($model) {
  //var_dump($model->id);
    });

    static::saving(function($model) {
      if(request()->has('validate')){
        return false;
      }
    });

    static::created(function($model) {

    });

    static::updated(function($model) {

    });

    static::deleting(function($model) {
      //var_dump($model);
      //die();
    });
  }
}