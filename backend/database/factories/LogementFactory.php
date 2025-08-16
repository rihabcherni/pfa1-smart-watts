<?php

namespace Database\Factories;

use App\Models\client;
use App\Models\logement;
use Illuminate\Database\Eloquent\Factories\Factory;

class LogementFactory extends Factory{
    protected $model = logement::class;
    public function definition(): array{
        $region=['Tunis','Ariana','Ben Arous','Mannouba','Nabeul','Zaghouan','Bizerte','Beja','Jendouba','Le Kef','Siliana','Kairouan','Kasserine','Sidi Bouzid','Sousse','Monastir','Mahdia','Sfax','Gafsa','Tozeur','Kebili','Gabes','Medenine','Tataouine'];
        $client_id = client::all()->random()->id;
        $adresse=$this->faker->unique()->randomElement(['31 Rue de la Liberté, n°1002' ,'8 Rue El Jazira, n°4000' ,
        '3 Avenue Habib Bourguiba, n°2080' ,'16 Rue Ibn Khaldoun, n°3000' ,'10 Rue de Marseille, n°1001' ,
        '25 Avenue Farhat Hached, n°8000' ,'12 Rue Tahar Ben Achour, n°4000' ,'27 Rue des Entrepreneurs, n°2080' ,
        '15 Rue du 2 Mars, n°3000' ,'6 Rue de Marseille, n°1001' ,'17 Rue Habib Thameur, n°4000' ,'9 Avenue Habib Bourguiba, n°2080' ,
        '18 Rue Ibn Khaldoun, n°3000' ,'21 Rue de Marseille, n°1001' ,'7 Rue El Jazira, n°4000' ,'24 Avenue Farhat Hached, n°8000' ,
        '20 Rue Tahar Ben Achour, n°4000' ,'13 Rue des Entrepreneurs, n°2080' ,'19 Rue Habib Thameur, n°4000' ,'14 Rue Ibn Khaldoun, n°3000' ,'23 Avenue Habib Bourguiba, n°2080' ,
        '22 Rue de Marseille, n°1001' ,'11 Rue El Jazira, n°4000' ,'26 Rue Tahar Ben Achour, n°4000' , '28 Avenue Farhat Hached, n°8000' ,'32 Rue de Marseille, n°1001' ,
        '33 Rue Habib Thameur, n°4000' ,'35 Avenue Habib Bourguiba, n°2080' ,'36 Rue El Jazira, n°4000' ,
        '37 Rue Tahar Ben Achour, n°4000' ,'38 Rue des Entrepreneurs, n°2080' ,'39 Rue Ibn Khaldoun, n°3000' ,
        '40 Avenue Farhat Hached, n°8000' ,'41 Rue de Marseille, n°1001' , '42 Rue Habib Thameur, n°4000' ,
        '44 Avenue Habib Bourguiba, n°2080' ,'45 Rue El Jazira, n°4000' , '46 Rue Tahar Ben Achour, n°4000' ,
        '47 Rue des Entrepreneurs, n°2080' ,'48 Rue Ibn Khaldoun, n°3000' ,'49 Avenue Farhat Hached, n°8000' ,
        '50 Rue de Marseille, n°1001' ,'51 Rue Habib Thameur, n°4000' ,'52 Avenue Habib Bourguiba, n°2080' ,'54 Rue El Jazira, n°4000']);

        return [
            'client_id' => $client_id,
            'adresse_logement' => $adresse,
            'code_Postal' => $this->faker->postcode,
            'region' => $this->faker->randomElement($region),
        ];
    }
}
