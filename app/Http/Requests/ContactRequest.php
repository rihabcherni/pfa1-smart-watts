<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
class ContactRequest extends FormRequest{
    public function authorize(): bool{
        return true;
    }

    public function rules(): array{
        if ($this->isMethod('post')) {
            return [
                'nom' => 'required|string|max:255',
                'prenom' => 'required|string|max:255',
                'email' => 'required|email|max:255',
                'numero_telephone' => 'required|string|max:255',
                'message' => 'required|string',
            ];
        }else if($this->isMethod('PUT')){
            return [
                'nom' => 'sometimes|required|string|max:255',
                'prenom' => 'sometimes|required|string|max:255',
                'email' => 'sometimes|required|email|max:255',
                'numero_telephone' => 'sometimes|required|string|max:255',
                'message' => 'sometimes|required|string',
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
