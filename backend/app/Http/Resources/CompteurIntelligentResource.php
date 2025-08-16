<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class compteurIntelligentResource extends JsonResource{
    public function toArray(Request $request){

        return [
            'id' => $this->id,
            'logement_id' => $this->logement_id,
            'date_installation' => $this->date_Installation,
            'index_ancien_mois' => $this->index_ancien_mois,
            'etat_panne'=> $this->etat_panne,
            'logement' => new LogementResource($this->whenLoaded('logement')),
            'consommations' => consoTranchesJourResource::collection($this->whenLoaded('consommations')),
            'pannes' => PanneResource::collection($this->whenLoaded('pannes')),
            'created_at' => $this->created_at->translatedFormat('H:i:s j F Y'),
            'updated_at' => $this->updated_at->translatedFormat('H:i:s j F Y'),

        ];
    }
}
