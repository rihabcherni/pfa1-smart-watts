<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class logement extends Model
{
    use HasFactory;

    protected $fillable = [
        'client_id',
        'adresse_logement',
        'code_Postal',
        'region',
    ];



    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function compteurs()
    {
        return $this->hasMany(compteurIntelligent::class);
    }
}
