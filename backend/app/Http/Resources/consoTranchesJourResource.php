<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;

class consoTranchesJourResource extends JsonResource{
    public function toArray(Request $request){

        return [
            'id' => $this->id,
            'compteur_intelligent_id' => $this->compteur_intelligent_id,
            'tarif_tranche_id' => $this->tarif_tranche_id,
            'date_consommation' =>Carbon::parse($this->date_consommation)->format('Y-m-d'),
            'index_recent_tranche' => $this->index_recent_tranche,
            'compteur' => new compteurIntelligentResource($this->whenLoaded('compteur')),
            'tranche' => new TarifTrancheResource($this->whenLoaded('tranche')),
            'created_at' => $this->created_at->translatedFormat('H:i:s j F Y'),
            'updated_at' => $this->updated_at->translatedFormat('H:i:s j F Y'),

        ];
    }
}

