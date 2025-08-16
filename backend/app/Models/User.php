<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;


class user extends Authenticatable implements MustVerifyEmail{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'nom',
        'prenom',
        'email',
        'CIN',
        'numero_telephone',
        'photo',
        'mot_de_passe',
    ];


    protected $hidden = [
        'remember_token',
    ];

    public function administrateur()
    {
        return $this->hasOne(Administrateur::class);
    }

    public function client()
    {
        return $this->hasOne(Client::class);
    }

    public function agentMaintenance()
    {
        return $this->hasOne(AgentMaintenance::class);
    }

    public function notifications()
    {
        return $this->hasMany(Notification::class);
    }

    public function reclamations()
    {
        return $this->hasManyThrough(Reclamation::class, Client::class);
    }

    public function compteurs()
    {
        return $this->hasManyThrough(compteurIntelligent::class, Logement::class, 'client_id', 'logement_id');
    }
    public function logements()
    {
        return $this->hasManyThrough(Logement::class, Client::class);
    }

    public function Pannes()
    {
        return $this->hasManyThrough(Panne::class, compteurIntelligent::class);
    }
}
