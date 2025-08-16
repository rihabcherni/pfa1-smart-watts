<?php

namespace App\Http\Controllers\client\Dashboard;
use App\Http\Controllers\BaseController as BaseController;
use App\Models\client;
use App\Models\compteurIntelligent;
use App\Models\consoTranchesJour;
use App\Models\logement;
use App\Models\reclamation;
use Laravel\Sanctum\PersonalAccessToken;
use Illuminate\Http\Request;
use Carbon\Carbon;

class GlobalStatController extends BaseController{
    public function globStatClient(Request $request){
        $token = $request->bearerToken();
        $personalAccessToken = PersonalAccessToken::findToken($token);
        if (!$personalAccessToken) {
            return response()->json(['message' => 'Invalid token'], 401);
        }
        $user = $personalAccessToken->tokenable;
        if ($user instanceof client) {
            $logement= logement::where('client_id',$user->id)->get();
            $nb_logement= $logement->count();
            $nb_compteur=0;
            $nb_cons=0;
            $nb_rec=0;
            $startDate = Carbon::now()->startOfMonth()->format("Y-m-d");
            $nowDate = Carbon::now()->format("Y-m-d");
            $t=[];
            foreach ($logement as $l) {
                $compteur= compteurIntelligent::where('logement_id',$l->id)->get();
                $nb_compteur+=$compteur->count();
                foreach ($compteur as $c) {
                    $cons= consoTranchesJour::where('compteur_intelligent_id',$c->id)->get();
                    $nb_cons+=$cons->count();
                    $consumption = consoTranchesJour::whereBetween('date_consommation', [$startDate, $nowDate])->get();
                    $consumptionStartMonth=consoTranchesJour::where('date_consommation', $startDate)->where('compteur_intelligent_id',$c->id)->get();
                    $consumptionFinalNow=consoTranchesJour::where('date_consommation', $nowDate)->where('compteur_intelligent_id',$c->id)->get();
                    $indexMonthStart=$consumptionStartMonth[0]['index_recent_tranche'];
                    $indexFinNow=$consumptionFinalNow[$consumptionFinalNow->count()-1]['index_recent_tranche'];
                    $nb_rec+= reclamation::where('compteur_intelligent_id',$c->id)->get()->count();
                    array_push($t,
                        [
                            'compteur_id'=>$c->id ,
                            'indexStartMonth'=>$indexMonthStart,
                            'indexFinalNow'=>$indexFinNow,
                            'consommLastMonth'=>-($indexFinNow-$indexMonthStart),
                        ]
                    );
                }
            }
        }
        $consommation=0;
        foreach($t as $total){
            $consommation+=$total['consommLastMonth'];
        }
        $myArray = [
            'nb_logement'=>$nb_logement,
            'nb_compteur'=>$nb_compteur,
            'total_consommation_allCompteur'=>$consommation,
            'nb_reclamation'=>$nb_rec,
            'consommation_lastMonth'=>$t,
        ];
        return response()->json($myArray);
    }
}
