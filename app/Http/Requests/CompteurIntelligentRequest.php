<?php

namespace App\Http\Requests;

use App\Models\logement;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
class compteurIntelligentRequest extends FormRequest{
    public function authorize(): bool{
        return true;
    }

    public function rules(): array{
        if ($this->isMethod('post')) {
            return [
                'logement_id' => 'required|integer|exists:logements,id',
                'date_Installation' => 'required|date',
                'index_ancien_mois' => 'required|integer',
                'etat_panne'=> 'required|boolean',
            ];
        }else if($this->isMethod('PUT')){
            return [
                'logement_id' => 'sometimes|required|integer|exists:logements,id',
                'date_Installation' => 'sometimes|required|date',
                'index_ancien_mois' => 'sometimes|required|integer',
                'etat_panne'=> 'sometimes|boolean',
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
