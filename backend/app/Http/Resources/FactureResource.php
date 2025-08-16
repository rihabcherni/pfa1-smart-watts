<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FactureResource extends JsonResource{
    public function toArray(Request $request){

        return [
            'id' => $this->id,
            'compteur_intelligent_id' => $this->compteur_intelligent_id,
            'montant_total_consommation' => $this->montant_total_consommation,
            'montant_total_optimale' => $this->montant_total_optimale,
            'mois_facturation' => $this->mois_facturation,
            'statut_facturation' => $this->statut_facturation,
            'date_facture' => $this->date_facture,
            'created_at' => $this->created_at->translatedFormat('H:i:s j F Y'),
            'updated_at' => $this->updated_at->translatedFormat('H:i:s j F Y'),

        ];
    }
}
