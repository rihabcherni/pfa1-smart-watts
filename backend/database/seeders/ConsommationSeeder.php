<?php
namespace Database\Seeders;

use App\Models\consoTranchesJour;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
class ConsommationSeeder extends Seeder{
    public function run(){
        $tarif=\App\Models\TarifTranche::get();
        $compteur=\App\Models\compteurIntelligent::get();
        foreach ($compteur as $c){
            foreach ($tarif as $t){
                $index = 0;
                $startDate = Carbon::now()->startOfMonth()->subMonth(3)->format("Y-m-d");
                $endDate = Carbon::now()->format("Y-m-d");
                for($date = Carbon::parse($startDate); $date->lte(Carbon::parse($endDate)); $date->addDay()) {
                    consoTranchesJour::create([
                        'compteur_intelligent_id' => $c->id,
                        'tarif_tranche_id' => $t->id,
                        'date_consommation' => $date->format("Y-m-d"),
                        'index_recent_tranche' => $index,
                    ]);
                    $index += rand(50, 150);
                    $c->update(['index_ancien_mois' => $index]);
                }

            }
        }
    }
}
