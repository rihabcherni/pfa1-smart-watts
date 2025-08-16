<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\BaseController as BaseController;
use App\Models\user;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\PersonalAccessToken;

class MotDePasseController extends BaseController{
    public function modifierPass(Request $request) {
        $token = $request->bearerToken();
        $personalAccessToken = PersonalAccessToken::findToken($token);
        if (!$personalAccessToken) {
            return response()->json(['message' => 'Invalid token'], 401);
        }

        $user = $personalAccessToken->tokenable;

        $validator= Validator::make(
            $request->all(),
            ['nouveau_mot_de_passe' =>['required','string'],'mot_de_passe'=>['required', 'string'] ]
        );
        if($validator->fails()){ return response()->json(['validation_errors' =>$validator->errors(),'status'=>401],200); }

        if($user !=null){
            $user1= user::where('id',$user->user_id)->first();
            if( (Hash::check($request->mot_de_passe, $user1->mot_de_passe)) ){
                $user1->mot_de_passe= Hash::make($request->nouveau_mot_de_passe);
                $user1->save();
                return response(['message'=>'user votre mot de passe est mise à jour avec success ','status'=>200],200);
            }
            return response(['validation_errors' =>["mot_de_passe"=>'votre ancien mot de passe est incorrect'],'status'=>401],200);
        }
    }
    public function forgotPassword() {
    }
}
