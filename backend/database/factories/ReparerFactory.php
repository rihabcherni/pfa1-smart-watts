<?php

namespace Database\Factories;

use App\Models\agentMaintenance;
use App\Models\compteurIntelligent;
use App\Models\Panne;
use App\Models\reparer;
use Illuminate\Database\Eloquent\Factories\Factory;

class ReparerFactory extends Factory{
    protected $model = reparer::class;
    public function definition(): array{
        $panne_id = Panne::all()->random()->id;
        $agent_maintenance_id = agentMaintenance::all()->random()->id;
        return [
            'agent_maintenance_id' => $agent_maintenance_id,
            'panne_id' => $panne_id,
        ];
    }
}
