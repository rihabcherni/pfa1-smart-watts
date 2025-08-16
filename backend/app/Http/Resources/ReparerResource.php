<?php
namespace App\Http\Resources;

use App\Models\agentMaintenance;
use App\Models\Panne;
use App\Models\user;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
class ReparerResource extends JsonResource{
    public function toArray(Request $request){
        $agentMaintenanceID = AgentMaintenance::where('id', $this->agent_maintenance_id)->first()->user_id;
        $agentMaintenance = user::where('id', $agentMaintenanceID)->first();
        $pannes = Panne::where('id', $this->panne_id)->first();
        return [
            'agent_maintenance' => $agentMaintenance->nom ." ".  $agentMaintenance->prenom ,
            'compteur_intelligent_id' => $pannes->compteur_intelligent_id,
            'type_panne' => $pannes->type_panne,
            'date_debut_panne' => $pannes->date_debut_panne,
            'date_fin_panne' =>  $pannes->date_fin_panne,
            'description_panne' =>  $pannes->description_panne,
            'cout_panne' =>  $pannes->cout_panne,
        ];
    }
}
