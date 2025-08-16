<?php

namespace Database\Factories;
use App\Models\compteurIntelligent;
use App\Models\Panne;
use Illuminate\Database\Eloquent\Factories\Factory;

class PanneFactory extends Factory{
    protected $model = Panne::class;
    public function definition(): array{
        $compteur_intelligent_id = compteurIntelligent::all()->random()->id;
        $dateDebutPanne = $this->faker->dateTimeBetween('-5 month', 'now');
        $dateFinPanne = $this->faker->dateTimeBetween($dateDebutPanne, 'now+1 week');

        return [
            'compteur_intelligent_id' => $compteur_intelligent_id,
            'type_panne' => $this->faker->randomElement(['materiels', 'logiciel', 'communication', 'configuration', 'alimentation éléctrique', 'sécurité','autre']),
            'date_debut_panne' => $dateDebutPanne,
            'date_fin_panne' => $dateFinPanne,
            'description_panne' => $this->faker->paragraph(),
            'cout_panne' => $this->faker->randomFloat(2, 10, 1000),
        ];
    }
}
