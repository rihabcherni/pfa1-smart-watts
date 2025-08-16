<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ClientResource extends JsonResource{
    public function toArray(Request $request){

        return [
            'id' => $this->id,
            'type_client' => $this->type_client,
            'user_id'=>$this->user_id,
            'nom' => $this->user->nom,
            'prenom' => $this->user->prenom,
            'CIN' => $this->user->CIN,
            'email' => $this->user->email,
            'numero_telephone' => $this->user->numero_telephone,
            'photo' => $this->user->photo,
            // 'logements' => LogementResource::collection($this->logements),
            // 'reclamations' => ReclamationResource::collection($this->reclamations),
            'created_at' => $this->created_at->translatedFormat('H:i:s j F Y'),
            'updated_at' => $this->updated_at->translatedFormat('H:i:s j F Y'),

        ];
    }
}
