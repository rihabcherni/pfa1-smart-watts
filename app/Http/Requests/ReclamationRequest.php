<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class ReclamationRequest extends FormRequest{
    public function authorize(): bool {
        return true;
    }

    public function rules(): array{
        if ($this->isMethod('post')) {
            return [
                'compteur_intelligent_id' => 'required|integer',
                'type_reclamation' => 'required|string|max:20',
                'description_reclamation' => 'required|string',
                'date_reclamation' => 'required|date_format:Y-m-d H:i:s',
                'etat_traitement' => 'required|boolean',
            ];
        }else if($this->isMethod('PUT')){
             return [
                'compteur_intelligent_id' => 'sometimes|integer',
                'type_reclamation' => 'sometimes|string|max:20',
                'description_reclamation' => 'sometimes|string',
                'date_reclamation' => 'sometimes|date_format:Y-m-d H:i:s',
                'etat_traitement' => 'sometimes|boolean',
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
