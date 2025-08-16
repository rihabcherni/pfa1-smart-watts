<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
class consoTranchesJourRequest extends FormRequest{
    public function authorize(): bool{
        return true;
    }

    public function rules(): array{
        if ($this->isMethod('post')) {
            return [
                'compteur_intelligent_id' => 'required|exists:compteur_intelligents,id',
                'tarif_tranche_id' => 'required|exists:tarif_tranches,id',
                'date_consommation' => 'required|date',
                'index_recent_tranche' => 'required|integer|min:0',
            ];
        }else if($this->isMethod('PUT')){
            return [
                'compteur_intelligent_id' => 'sometimes|required|exists:compteur_intelligents,id',
                'tarif_tranche_id' => 'sometimes|required|exists:tarif_tranches,id',
                'date_consommation' => 'sometimes|required|date',
                'index_recent_tranche' => 'sometimes|required|integer|min:0',
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
