<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class TarifTranche extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom_tranche',
        'heure_debut',
        'heure_fin',
        'prix_unitaire_kilowatt',
    ];


}
