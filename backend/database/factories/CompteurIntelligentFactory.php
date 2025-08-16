<?php

namespace Database\Factories;

use App\Models\compteurIntelligent;
use App\Models\logement;
use App\Models\tranche;
use Illuminate\Database\Eloquent\Factories\Factory;
class compteurIntelligentFactory extends Factory{
    protected $model = compteurIntelligent::class;
    public function definition(): array{
        $logement_id = logement::all()->random()->id;
        return [
            'logement_id' => $logement_id,
            'date_Installation' => date('Y-m-d', strtotime('-'.rand(4, 5).' month')),
            'index_ancien_mois' => 0,
            'etat_panne' => $this->faker->numberBetween(0, 1),
        ];
    }
}
