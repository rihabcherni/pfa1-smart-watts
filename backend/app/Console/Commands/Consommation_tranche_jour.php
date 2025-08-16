<?php

namespace App\Console\Commands;

use App\Models\compteurIntelligent;
use App\Models\consoTranchesJour;
use Carbon\Carbon;
use Illuminate\Console\Command;

class Consommation_tranche_jour extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:consommation_tranche_jour';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $compteurs = compteurIntelligent::all();
        $date = Carbon::today();
        foreach ($compteurs as $cp) {
            $lastIndex = consoTranchesJour::where('compteur_intelligent_id', $cp->id)
            ->whereDate('date_consommation', '=', $date)->whereIn('tarif_tranche_id', [1, 2,3,4])
            ->orderByDesc('date_consommation')->get();
            $lastIndexes[$cp->id] = $lastIndex[$lastIndex->count()-1]->index_recent_tranche ? $lastIndex[$lastIndex->count()-1]->index_recent_tranche : 0;
            $tranche= $lastIndex[$lastIndex->count()-1]->tarif_tranche_id ;
            if($tranche ===4){
                $tranche=1;
            }else{
                $tranche+=1; 
            }
            Consommation_tranche_jour::create([
                'compteur_intelligent_id' => $cp->id,
                'tarif_tranche_id' => $tranche,
                'date_consommation' => $date->format("Y-m-d"),
                'index_recent_tranche' => $lastIndexes[$cp->id]+random_int(50,200),                    
            ]);
        }
    }
}
