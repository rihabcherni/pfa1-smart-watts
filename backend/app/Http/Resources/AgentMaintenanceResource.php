<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AgentMaintenanceResource extends JsonResource{
    public function toArray(Request $request){

        return [
            'id' => $this->id,
            'nom' => $this->user->nom,
            'prenom' => $this->user->prenom,
            'CIN' => $this->user->CIN,
            'email' => $this->user->email,
            'numero_telephone' => $this->user->numero_telephone,
            'photo' => $this->user->photo,
            'pannes' => PanneResource::collection($this->reparations),
            'created_at' => $this->created_at->translatedFormat('H:i:s j F Y'),
            'updated_at' => $this->updated_at->translatedFormat('H:i:s j F Y'),

        ];
    }
}
