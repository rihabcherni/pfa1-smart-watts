<?php

namespace App\Http\Controllers\Admin\Dashboard;
use App\Http\Controllers\BaseController as BaseController;
use Illuminate\Support\Facades\Hash;

class GlobalStatController extends BaseController{
    public function globStatAdmin(){
        // $nbr_zone_travail= Zone_travail::all()->count();
        // $nbr_poubelle_plastique= Stock_poubelle::all()->where("type_poubelle","plastique")->sum("quantite_disponible");

        // $qt_dechet_plastique= Zone_depot::all()->sum("quantite_depot_actuelle_plastique");



        $myArray = [
            // 'nbr_poubelle_plastique'=>$nbr_poubelle_plastique,
            // 'qt_dechet_plastique'=>round($qt_dechet_plastique  * 1000) / 1000,
        ];
        return response()->json($myArray);
    }
}
