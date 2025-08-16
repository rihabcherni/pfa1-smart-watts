<?php

namespace App\Http\Controllers\client\crud;
use App\Models\reclamation;
use App\Http\Requests\ReclamationRequest;
use App\Http\Controllers\Controller;
use App\Http\Resources\LogementResource;
use App\Http\Resources\ReclamationResource;
use App\Models\client;
use App\Models\logement;
use Illuminate\Http\Request;
use Laravel\Sanctum\PersonalAccessToken;

class ReclamationController extends Controller{
    protected $model = reclamation::class;
    protected $resource = ReclamationResource::class;
    public function index(Request $request) {
        $token = $request->bearerToken();
        $personalAccessToken = PersonalAccessToken::findToken($token);
        if (!$personalAccessToken) {
            return response()->json(['message' => 'Invalid token'], 401);
        }
        $user = $personalAccessToken->tokenable;
        if ($user instanceof client) {
            $logement = logement::where('client_id',$user->id)->get();
            return $this->handleResponse(LogementResource::collection($logement), 'Affichage des logement!');
        }
        return "ffff";
    }
    public function show($id , $resource=null){
        return parent::show($id, $this->resource);
    }
    public function store(ReclamationRequest $request){
        $input = $request->all();
        $reclamation = reclamation::create($input);
        return $this->handleResponse(new ReclamationResource($reclamation), 'reclamation crée!');
    }

    public function update(ReclamationRequest $request, reclamation $reclamation){
        //
    }

    public function destroy(reclamation $reclamation){
        //
    }
}
