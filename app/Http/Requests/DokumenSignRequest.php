<?php

namespace App\Http\Requests;

class DokumenSignRequest extends FormRequest
{
  protected $uploadedPath = 'public/dokumen';

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
      'dokumen_id' => 'required|string',
      'passphrase' => 'required|string',
      'status' => 'string',
    ];
  }

}
