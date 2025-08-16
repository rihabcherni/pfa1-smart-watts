<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class compteurIntelligent extends Model{
    use HasFactory;

    protected $fillable = [
        'logement_id',
        'date_Installation',
        'index_ancien_mois',
        'etat_panne'
    ];

    public function logement()
    {
        return $this->belongsTo(Logement::class);
    }

    public function consommations()
    {
        return $this->hasMany(consoTranchesJours::class);
    }

    public function pannes()
    {
        return $this->hasMany(Panne::class);
    }
}
