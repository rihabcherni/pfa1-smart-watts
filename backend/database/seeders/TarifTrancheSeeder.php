<?php

namespace Database\Seeders;

use App\Models\TarifTranche;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TarifTrancheSeeder extends Seeder{
    public function run(): void{
        TarifTranche::create([
            'nom_tranche'=> 'Matin',
            'heure_debut'=> '05:00:00',
            'heure_fin'=> '11:59:00',
            'prix_unitaire_kilowatt'=> '0.340'
        ]);
        TarifTranche::create([
            'nom_tranche'=> 'Après-midi',
            'heure_debut'=> '12:00:00',
            'heure_fin'=> '17:59:00',
            'prix_unitaire_kilowatt'=> '0.400'
        ]);
        TarifTranche::create([
            'nom_tranche'=> 'Soir',
            'heure_debut'=> '18:00:00',
            'heure_fin'=> '23:59:00',
            'prix_unitaire_kilowatt'=> '0.500'
        ]);
        TarifTranche::create([
            'nom_tranche'=> 'Nuit',
            'heure_debut'=> '00:00:00',
            'heure_fin'=> '04:59:00',
            'prix_unitaire_kilowatt'=> '0.560'
        ]);
    }
}


