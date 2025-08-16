<?php

namespace App\Models;

use App\Http\Resources\AdministrateurResource;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class administrateur extends Authenticatable implements MustVerifyEmail{
    use HasFactory,HasApiTokens, Notifiable;
    protected $fillable = [
        'user_id',
    ];
    public function user()
    {
        return $this->belongsTo(user::class);
    }
    public static function getAdministrateur(){
        $Administrateur = AdministrateurResource::collection(administrateur::all())->map(function ($item, $key) {
            return collect($item)->except(['deleted_at'])->toArray();
        });
        return $Administrateur;
    }

    public static function getAdministrateurById($id){
        $Administrateur = AdministrateurResource::collection(Administrateur::where('id',$id)->get());
        return $Administrateur;
    }
}
