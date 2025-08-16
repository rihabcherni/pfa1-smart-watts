<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ReclamationResource extends JsonResource{
    public function toArray(Request $request){

        return [
            'id' => $this->id,
            'compteur_intelligent_id' => $this->compteur_intelligent_id,
            'type_reclamation' => $this->type_reclamation,
            'description_reclamation' => $this->description_reclamation,
            'date_reclamation' => $this->date_reclamation,
            'etat_traitement'=> $this->etat_traitement,
            'created_at' => $this->created_at->translatedFormat('H:i:s j F Y'),
            'updated_at' => $this->updated_at->translatedFormat('H:i:s j F Y'),

        ];
    }
}
