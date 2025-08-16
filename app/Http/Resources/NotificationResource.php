<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class NotificationResource extends JsonResource{
    public function toArray(Request $request){

        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'user' => $this->user->prenom." ".$this->user->nom,
            'type_notification' => $this->type_notification,
            'description_notification' => $this->description_notification,
            'date_notification' => $this->date_notification,
            'etat_lecture' => $this->etat_lecture,
            'created_at' => $this->created_at->translatedFormat('H:i:s j F Y'),
            'updated_at' => $this->updated_at->translatedFormat('H:i:s j F Y'),

        ];
    }
}
