<?php

namespace Database\Seeders;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder{
    public function run(): void{
        $this->call([
            TarifTrancheSeeder::class,
            CompteSeeder::class,
        ]);
        \App\Models\administrateur::factory(5)->create();
        \App\Models\agentMaintenance::factory(5)->create();
        \App\Models\client::factory(5)->create();
        $this->call([
            ConsommationSeeder::class,
        ]);
        \App\Models\notification::factory(50)->create();
        \App\Models\reclamation::factory(10)->create();
        \App\Models\Panne::factory(15)->create();
        \App\Models\reparer::factory(30)->create();



        \App\Models\facture::factory(60)->create();
        \App\Models\paiement::factory(50)->create();
        \App\Models\contact::factory(50)->create();
    }
}
