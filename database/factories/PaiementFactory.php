<?php

namespace Database\Factories;

use App\Models\facture;
use App\Models\paiement;
use Illuminate\Database\Eloquent\Factories\Factory;

class PaiementFactory extends Factory{
    protected $model = paiement::class;
    public function definition(): array{
        $facture_id = facture::all()->random()->id;

        return [
            'facture_id' => $facture_id,
            'montant_paiement' => $this->faker->randomFloat(2, 100, 5000),
            'date_paiement' =>$this->faker->dateTimeBetween('-5 month', 'now'),
            'mode_paiement' => $this->faker->randomElement(['espece','carte de crédit','chèque','virement bancaire']),
        ];
    }
}

