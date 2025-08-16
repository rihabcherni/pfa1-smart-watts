<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class consoTranchesJour extends Model{
    use HasFactory;

    protected $fillable = [
        'compteur_intelligent_id',
        'tarif_tranche_id',
        'date_consommation',
        'index_recent_tranche'
    ];


    public function compteur()
    {
        return $this->belongsTo(compteurIntelligent::class);
    }

    public function tariftranche() {
        return $this->belongsTo(Tranche::class);
    }
}
