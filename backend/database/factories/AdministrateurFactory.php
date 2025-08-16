<?php

namespace Database\Factories;

use App\Models\administrateur;
use App\Models\user;
use Illuminate\Database\Eloquent\Factories\Factory;
class AdministrateurFactory extends Factory{
    protected $model = Administrateur::class;

    public function definition(){
        return [
            'user_id' => user::factory()->create()->id,
        ];
    }
}
