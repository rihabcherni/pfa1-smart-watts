<?php
namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
class ReparerRequest extends FormRequest{
    public function authorize(): bool{
        return true;
    }
    public function rules(): array{
        if ($this->isMethod('post')) {
            return [
                'agent_maintenance_id' => 'required|exists:agent_maintenances,id',
                'panne_id'=>'required|exists:pannes,id',
            ];
        }else if($this->isMethod('PUT')){
            return [
                'agent_maintenance_id' => 'required|exists:agent_maintenances,id',
                'panne_id'=>'required|exists:pannes,id',
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
