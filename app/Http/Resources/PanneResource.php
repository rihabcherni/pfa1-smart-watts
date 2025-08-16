<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
class PanneResource extends JsonResource{
    public function toArray(Request $request){
        return [
            'id' => $this->id,
            'compteur_intelligent_id' => $this->compteur_intelligent_id,
            'type_panne' => $this->type_panne,
            'date_debut_panne' => $this->date_debut_panne,
            'date_fin_panne' => $this->date_fin_panne,
            'description_panne' => $this->description_panne,
            'cout_panne' => $this->cout_panne,
            'created_at' => $this->created_at->translatedFormat('H:i:s j F Y'),
            'updated_at' => $this->updated_at->translatedFormat('H:i:s j F Y'),

        ];
    }
}
