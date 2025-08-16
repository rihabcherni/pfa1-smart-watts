<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PaiementResource extends JsonResource{
    public function toArray(Request $request){

        return [
            'id' => $this->id,
            "facture_id"=> $this->facture_id,
            "date_paiement"=> $this->date_paiement,
            "montant_paiement"=> $this->montant_paiement,
            "mode_paiement"=> $this->mode_paiement,
            'created_at' => $this->created_at->translatedFormat('H:i:s j F Y'),
            'updated_at' => $this->updated_at->translatedFormat('H:i:s j F Y'),

        ];
    }
}

