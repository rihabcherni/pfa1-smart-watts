<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class client extends Authenticatable implements MustVerifyEmail
{
    use HasFactory,HasApiTokens, Notifiable;
    use \Staudenmeir\EloquentHasManyDeep\HasRelationships;

    protected $fillable = [
        'user_id',
        'type_client',
    ];


    public function user()
    {
        return $this->belongsTo(user::class);
    }


    public function logements(){
        return $this->hasMany(Logement::class);
    }
    public function compteurs(){
        return $this->hasManyDeep(compteurIntelligent::class, [logement::class]);
    }
}

