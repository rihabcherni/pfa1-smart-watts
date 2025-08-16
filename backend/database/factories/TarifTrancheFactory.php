<?php

namespace Database\Factories;

use App\Models\TarifTranche;
use Illuminate\Database\Eloquent\Factories\Factory;

class TarifTrancheFactory extends Factory{
    protected $model = Tariftranche::class;

    public function definition(): array{
        return [
            'nom_tranche' => $this->faker->randomElement(['matin', 'aprés-midi', 'soir', 'nuit']),
            'heure_debut' => $this->faker->dateTimeBetween('now', '+1 day'),
            'heure_fin' => $this->faker->dateTimeBetween('now', '+2 days'),
            'prix_unitaire_kilowatt' => $this->faker->randomFloat(2, 0, 5),
        ];
    }
}
