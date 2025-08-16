<?php

namespace Database\Factories;

use App\Models\compteurIntelligent;
use App\Models\facture;
use Illuminate\Database\Eloquent\Factories\Factory;
class FactureFactory extends Factory{
    protected $model = facture::class;

    public function definition(): array{
        $compteur_intelligent_id = compteurIntelligent::all()->random()->id;
        $statut_facturation = ['Payé', 'Non payé', 'en retard de paiement'];

        return [
            'compteur_intelligent_id' => $compteur_intelligent_id,
            'montant_total_consommation' => $this->faker->randomFloat(2, 100, 5000),
            'montant_total_optimale' => $this->faker->randomFloat(2, 100, 5000),
            'mois_facturation' => $this->faker->numberBetween(1, 12),
            'statut_facturation' =>  $this->faker->randomElement($statut_facturation),
            'date_facture' => $this->faker->dateTimeBetween('-5 month', 'now'),
        ];
    }
}
