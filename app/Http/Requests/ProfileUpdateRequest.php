<?php

namespace App\Http\Requests;

class ProfileUpdateRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   *
   * @return bool
   */
  public function authorize()
  {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   */
  public function rules()
  {
    return [
      'nik'       => 'required|digits:16',
      'name'      => 'string',
      'nip'       => 'string',
      'telepon'   => 'string',
      'jabatan'   => 'string',
      'unit_kerja'=> 'string',
      'golongan'  => 'string',
    ];
  }
}
