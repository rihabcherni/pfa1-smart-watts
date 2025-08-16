<?php

namespace Database\Factories;

use App\Models\agentMaintenance;
use App\Models\user;
use Illuminate\Database\Eloquent\Factories\Factory;

class AgentMaintenanceFactory extends Factory{
    protected $model = agentMaintenance::class;
    public function definition(): array{
        return [
            'user_id' => user::factory()->create()->id,
        ];
    }
}
