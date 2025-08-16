<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
class LogementRequest extends FormRequest{
    public function authorize(): bool{
        return true;
    }

    public function rules(): array{
        if ($this->isMethod('post')) {
            return [
                'client_id' => 'required|integer',
                'adresse_logement' => 'required|string|max:40',
                'code_Postal' => 'required|string|max:20',
                'region' => 'required|string|max:20',
            ];
        }else if($this->isMethod('PUT')){
            return [
                'client_id' => 'sometimes|required|integer',
                'adresse_logement' => 'sometimes|required|string|max:40',
                'code_Postal' => 'sometimes|required|string|max:20',
                'region' => 'sometimes|required|string|max:20',
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
