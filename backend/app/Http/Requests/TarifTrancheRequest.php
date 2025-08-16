<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
class TarifTrancheRequest extends FormRequest{
    public function authorize(): bool{
        return true;
    }

    public function rules(): array{
        if ($this->isMethod('post')) {
            return [
                'nom_tranche' => ['required', 'string', 'in:matin,aprés-midi,soir,nuit'],
                'heure_debut' => ['required', 'date_format:Y-m-d H:i:s'],
                'heure_fin' => ['required', 'date_format:Y-m-d H:i:s', 'after:heure_debut'],
                'prix_unitaire_kilowatt' => ['required', 'numeric' ,'min:0']
            ];
        }else if($this->isMethod('PUT')){
            return [
                'nom_tranche' => 'sometimes|required|in:matin,aprés-midi,soir,nuit',
                'heure_debut' => 'sometimes|required|date_format:Y-m-d H:i:s',
                'heure_fin' => 'sometimes|required|date_format:Y-m-d H:i:s|after:heure_debut',
                'prix_unitaire_kilowatt' => ['sometimes','required', 'numeric' ,'min:0']
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
