<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class reclamation extends Model
{
    use HasFactory;

    protected $fillable = [
        'compteur_intelligent_id',
        'type_reclamation',
        'description_reclamation',
        'date_reclamation',
        'etat_traitement'
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function client(){
        return $this->hasManyDeep(compteurIntelligent::class, [logement::class],[Client::class]);
    }

    public function compteurIntelligent(){
        return $this->belongsTo(compteurIntelligent::class);
    }

    // getters and setters for $primaryKey
    public function getIdAttribute($value){
        return $value;
    }

    public function setIdAttribute($value){
        $this->attributes['reclamation_id'] = $value;
    }

    // getter and setter for $dates
    public function getDateReclamationAttribute($value){
        return $this->asDateTime($value)->format('Y-m-d H:i:s');
    }

    public function setDateReclamationAttribute($value){
        $this->attributes['date_reclamation'] = $this->fromDateTime($value);
    }

    // request rules
    public static function rules()
    {
        return [
            'client_id' => 'required|exists:clients,id',
            'compteur_intelligent_id'=> 'required|exists:compteur_intelligents,id',
            'type_reclamation' => 'required|string|max:20',
            'description_reclamation' => 'required|string',
            'date_reclamation' => 'required|date_format:Y-m-d H:i:s',
            'etat_traitement' => 'required|boolean'
        ];
    }
}
