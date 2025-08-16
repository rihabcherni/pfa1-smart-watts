<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\BaseController as BaseController;
use App\Models\administrateur;
use App\Models\agentMaintenance;
use App\Models\client;
use App\Models\user;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class LoginController extends BaseController{
    public function login(Request $request){
        $validator= Validator::make($request->all(),[
            'email' =>['required','email'],
            'mot_de_passe'=>['required', 'string'],
            'recaptcha'=>['required', 'string'],
        ]);
        if($validator->fails()){
            return response()->json(['validation_errors' =>$validator->errors(),'status'=>401],200);
        }
        $user=user::where('email',$request->email)->first();
        if ($user !== null) {
            $administrateur=administrateur::where('user_id',$user->id)->first();
            $client=client::where('user_id',$user->id)->first();
            $agent=agentMaintenance::where('user_id',$user->id)->first();
            if ($administrateur !== null) {
                if(Auth::guard('administrateur') && (Hash::check($request->mot_de_passe,  $user->mot_de_passe))  && ($request->recaptcha!== null)
                 ){
                    return response()->json([
                        'Role'=>'administrateur',
                        'status'=>200,
                        'id'=>$administrateur->id,
                        'details'=>$user,
                        'token'=> $administrateur->createToken('administrateur-login')->plainTextToken,
                        'message' =>'administrateur vous avez connecté avec success',
                    ],200);
                }else{
                    return response()->json(['error' => 'Invalid credentials','validation_errors' =>["mot_de_passe"=>"votre mot de passe est incorrect."], 'status'=>401]);
                }
            }else if ($client !== null){
                if(Auth::guard('client') && (Hash::check($request->mot_de_passe,  $user->mot_de_passe)) && ($request->recaptcha!== null)
                ){
                    return response()->json([
                        'Role'=>'client',
                        'status'=>200,
                        'id'=>$client->id,
                        'details'=>$user,
                        'token'=> $client->createToken('client-login')->plainTextToken,
                        'message' =>'client vous avez connecté avec success',
                    ],200);
                }else{
                    return response()->json(['error' => 'Invalid credentials','validation_errors' =>["mot_de_passe"=>"votre mot de passe est incorrect."], 'status'=>401]);
                }
            }else if ($agent !== null){
                if(Auth::guard('agent-maintenance') && (Hash::check($request->mot_de_passe,  $user->mot_de_passe))  && ($request->recaptcha!== null)
                 ){
                    return response()->json([
                        'Role'=>'agent-maintenance',
                        'status'=>200,
                        'id'=>$agent->id,
                        'details'=>$user,
                        'token'=> $agent->createToken('agent-maintenance-login')->plainTextToken,
                        'message' =>'agent-maintenance vous avez connecté avec success',
                    ],200);
                }else{
                    return response()->json(['error' => 'Invalid credentials','validation_errors' =>["mot_de_passe"=>"votre mot de passe est incorrect."], 'status'=>401]);
                }
            }
        } else {
            return response()->json(['error' => 'Invalid credentials','validation_errors' =>["email"=>"Le champ email saisie est invalide"], 'status'=>401]);
        }
    }
}
