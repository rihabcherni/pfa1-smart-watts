<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
class PanneRequest extends FormRequest{
    public function authorize(): bool{
        return true;
    }
    public function rules(): array{
        if ($this->isMethod('post')) {
            return [
                'compteur_intelligent_id' => 'required|exists:compteur_intelligents,id',
                'agent_maintenance_id' => 'required|exists:agent_maintenances,id',
                'type_panne' => 'nullable|in:materiels,logiciel,communication,configuration,alimentation éléctrique,sécurité,autre',
                'date_debut_panne' => 'required|date',
                'date_fin_panne' => 'required|date|after_or_equal:date_debut_panne',
                'description_panne' => 'required|string',
                'cout_panne' => 'required|numeric|min:0',
            ];
        }else if($this->isMethod('PUT')){
            return [
                'compteur_intelligent_id' => 'sometimes|required|exists:compteur_intelligents,id',
                'agent_maintenance_id' => 'sometimes|required|exists:agent_maintenances,id',
                'type_panne' => 'nullable|in:materiels,logiciel,communication,configuration,alimentation éléctrique,sécurité,autre',
                'date_debut_panne' => 'sometimes|required|date',
                'date_fin_panne' => 'sometimes|required|date|after_or_equal:date_debut_panne',
                'description_panne' => 'sometimes|required|string',
                'cout_panne' => 'sometimes|required|numeric|min:0',
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
