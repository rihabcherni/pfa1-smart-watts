<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class userRequest extends FormRequest{
    public function authorize(): bool{
        return true;
    }
    public function rules(): array{
        if ($this->isMethod('post')) {
            return [
                'nom' => 'required|string|regex:/^[A-Za-z ]*$/i|max:255',
                'prenom' => 'required|string|regex:/^[A-Za-z ]*$/i|max:255',
                'email' => 'required|email|max:50|unique:users',
                'CIN' => 'required|numeric|digits:8|unique:users',
                'numero_telephone' => 'required|numeric|digits:8|unique:users',
                'photo' => 'sometimes|nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'mot_de_passe' => 'required|string'
            ];
        }else if($this->isMethod('PUT')){
            return [
                'nom' => 'sometimes|nullable|string|regex:/^[A-Za-z ]*$/i|max:255',
                'prenom' => 'sometimes|nullable|string|regex:/^[A-Za-z ]*$/i|max:255',
                'email' => 'sometimes|nullable|email|max:50|unique:users',
                'CIN' => 'sometimes|nullable|numeric|digits:8|unique:users',
                'numero_telephone' => 'sometimes|nullable|numeric|digits:8|unique:users',
                'photo' => 'sometimes|nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'mot_de_passe' => 'sometimes|nullable|string',
            ];
        }
    }
    public function failedValidation(Validator $validator){
        throw new HttpResponseException(response()->json([
                'success'   => false,
                'message'   => 'Validation errors',
                'validation_error'      => $validator->errors()
        ]));
    }
}
