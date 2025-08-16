<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class LogementResource extends JsonResource{
    public function toArray(Request $request){

        return [
            'id' => $this->id,
            'client_id' => $this->client_id,
            'client' => new ClientResource($this->client),
            'adresse_logement' => $this->adresse_logement,
            'code_postal' => $this->code_postal,
            'region' => $this->region,
            'compteur_intelligents' => compteurIntelligentResource::collection($this->compteurs),
            'created_at' => $this->created_at->translatedFormat('H:i:s j F Y'),
            'updated_at' => $this->updated_at->translatedFormat('H:i:s j F Y'),

        ];
    }
}

