<?php

namespace Database\Factories;
use App\Models\client;
use App\Models\compteurIntelligent;
use App\Models\logement;
use App\Models\user;
use Illuminate\Database\Eloquent\Factories\Factory;

class ClientFactory extends Factory{
    protected $model = client::class;
    public function definition(): array{
        return [
            'user_id' => user::factory()->create()->id,
            'type_client'=>$this->faker->randomElement(['residentiel', 'industriel','commercial','secteur-public', 'agricole'])
        ];
    }
    public function configure()
    {
        return $this->afterCreating(function (Client $client) {
            $logementsCount = $this->faker->numberBetween(1,3);
            $logements = $client->logements()->saveMany(logement::factory()->count($logementsCount)->make());
            foreach ($logements as $logement) {
                $compteursCount = $this->faker->numberBetween(1, 3);
                $compteurs = $logement->compteurs()->saveMany(compteurIntelligent::factory()->count($compteursCount)->make());
            }
        });
    }
}
