<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class notification extends Model{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'type_notification',
        'description_notification',
        'date_notification',
        'etat_lecture',
    ];


    public function user()
    {
        return $this->belongsTo(user::class);
    }
}
