<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class agentMaintenance extends Authenticatable implements MustVerifyEmail
{
    use HasFactory,HasApiTokens, Notifiable;

    protected $fillable = [
        'user_id',
    ];

    public function user()
    {
        return $this->belongsTo(user::class);
    }

    public function reparations()
    {
        return $this->belongsToMany(compteurIntelligent::class, 'pannes', 'agent_maintenance_id', 'compteur_intelligent_id')->withPivot(['type_panne', 'date_debut_panne', 'date_fin_panne', 'description_panne', 'cout_panne'])->withTimestamps();
    }
    public function Pannes()
    {
        return $this->hasMany(Panne::class);
    }
}














