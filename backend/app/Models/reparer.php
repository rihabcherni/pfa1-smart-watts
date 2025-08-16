<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class reparer extends Model{
    use HasFactory;
    protected $fillable = [
        'agent_maintenance_id',
        'panne_id',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function agents(){
        return $this->hasOne(agentMaintenance::class);
    }
    public function pannes(){
        return $this->hasOne(Panne::class);
    }
}
