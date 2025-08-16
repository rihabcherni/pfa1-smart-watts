<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
class FactureRequest extends FormRequest{
    public function authorize(): bool{
        return true;
    }

    public function rules(): array{
        if ($this->isMethod('post')) {
            return [
                'compteur_intelligent_id' => 'required|exists:compteur_intelligents,id',
                'montant_total_consommation' => 'required|numeric|min:0',
                'montant_total_optimale' => 'required|numeric|min:0',
                'mois_facturation' => 'required|integer|min:1|max:12',
                'statut_facturation' => 'required|string',
                'date_facture' => 'required|date',
            ];
        }else if($this->isMethod('PUT')){
            return [
                'compteur_intelligent_id' => 'sometimes|required|exists:compteur_intelligents,id',
                'montant_total_consommation' => 'sometimes|required|numeric|min:0',
                'montant_total_optimale' => 'sometimes|required|numeric|min:0',
                'mois_facturation' => 'sometimes|required|integer|min:1|max:12',
                'statut_facturation' => 'sometimes|required|string',
                'date_facture' => 'sometimes|required|date',
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
