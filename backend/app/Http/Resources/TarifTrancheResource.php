<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TarifTrancheResource extends JsonResource{
    public function toArray(Request $request){

        return [
            'id' => $this->id,
            'nom_tranche' => $this->nom_tranche,
            'heure_debut' => $this->heure_debut,
            'heure_fin' => $this->heure_fin,
            'prix_unitaire_kilowatt' => $this->prix_unitaire_kilowatt,
            'created_at' => $this->created_at->translatedFormat('H:i:s j F Y'),
            'updated_at' => $this->updated_at->translatedFormat('H:i:s j F Y'),

        ];
    }
}
