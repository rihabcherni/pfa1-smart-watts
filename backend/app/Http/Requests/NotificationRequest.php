<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
class NotificationRequest extends FormRequest{
    public function authorize(): bool{
        return true;
    }

    public function rules(): array{
        if ($this->isMethod('post')) {
            return [
                'user_id' => 'required|integer',
                'type_notification' => 'required|in: Paiement, Panne, récalamtion,autres',
                'description_notification' => 'required|string',
                'date_notification' => 'required|date',
                'etat_lecture' => 'required|string',
            ];
        }else if($this->isMethod('PUT')){
            return [
                'user_id' => 'sometimes|integer',
                'type_notification' => 'sometimes|in:Paiement, Panne, récalamtion,autres',
                'description_notification' => 'sometimes|string',
                'date_notification' => 'sometimes|date',
                'etat_lecture' => 'sometimes|string',
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
