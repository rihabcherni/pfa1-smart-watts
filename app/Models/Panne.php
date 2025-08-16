<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Panne extends Model
{
    use HasFactory;

    protected $fillable = [
        'compteur_intelligent_id',
        'agent_maintenance_id',
        'type_panne',
        'date_debut_panne',
        'date_fin_panne',
        'description_panne',
        'cout_panne',
    ];
    protected $dates = ['date_debut_panne','date_fin_panne'];

    public function compteurs(){
        return $this->belongsTo(compteurIntelligent::class, 'compteur_intelligent_id');
    }

    public function agentMaintenances(){
        return $this->belongsTo(AgentMaintenance::class, 'agent_maintenance_id');
    }
}
