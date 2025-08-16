<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class facture extends Model
{
    use HasFactory;

    protected $fillable = [
        'compteur_intelligent_id',
        'montant_total_consommation',
        'montant_total_optimale',
        'mois_facturation',
        'statut_facturation',
        'date_facture',
    ];


    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function compteur_intelligent()
    {
        return $this->belongsTo(compteurIntelligent::class);
    }
}
