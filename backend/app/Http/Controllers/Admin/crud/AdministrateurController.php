<?php

namespace App\Http\Controllers\Admin\crud;

use App\Exports\AdministrateurExport;
use App\Http\Controllers\BaseController as BaseController;
use App\Http\Requests\userRequest;
use App\Models\administrateur;
use App\Http\Resources\AdministrateurResource;
use App\Models\user;
use Illuminate\Support\Facades\Hash;
use Maatwebsite\Excel\Facades\Excel;
use Barryvdh\DomPDF\Facade\Pdf;
class AdministrateurController extends BaseController{
    protected $model = Administrateur::class;
    protected $resource = AdministrateurResource::class;

    public function index($resource = null) {
        return parent::index($this->resource);
    }
    public function show($id , $resource=null){
        return parent::show($id, $this->resource);
    }
    public function store(userRequest $request){
        $userData = $request->all();
        if ($image = $request->file('photo')) {
            $destinationPath = 'images/Administrateur';
            $profileImage = date('YmdHis') . "." . $image->getClientOriginalExtension();
            $image->move($destinationPath, $profileImage);
            $userData['photo'] = "$profileImage";
        }
        $user = user::create($userData);
        $administrateurData['user_id'] = $user->id;
        $administrateur = Administrateur::create($administrateurData);
        return $this->handleResponse(new AdministrateurResource($administrateur), 'administrateur créé avec succès!');
    }

    public function update(userRequest $request, user $administrateur){
        $input = $request->all();
        if(!($request->mot_de_passe==null)){
            $input['mot_de_passe'] = Hash::make($input['mot_de_passe']);
        }
        $administrateur= $administrateur->update($input);
        return $this->handleResponse($administrateur, 'administrateur modifié avec succes');
    }

    public function destroy($id) {
        $administrateur =administrateur::find($id);
        if (is_null($administrateur)) {
            return $this->handleError('administrateur n\'existe pas!');
        }
        else{
            $administrateur->delete();
            return $this->handleResponse(new administrateurResource($administrateur), 'administrateur supprimé!');
        }
    }
    public function exportInfoExcel(){
        return Excel::download(new AdministrateurExport  , 'administrateur-liste.xlsx');
    }
    public function exportInfoCSV(){
        return Excel::download(new AdministrateurExport, 'administrateur-liste.csv');
    }

    public function pdf($id){
        $administrateur = administrateur::find($id);
        if (is_null($administrateur)) {
            return $this->handleError('administarteur n\'existe pas!');
        }else{
            $administrateurResource = new AdministrateurResource($administrateur);
            $data = $administrateurResource->toArray(request());
            $pdf = Pdf::loadView('pdf/unique/Admin', $data);
            return $pdf->download('administrateur.pdf');
        }
    }
    public function pdfAll(){
        $administrateur = administrateur::all();
        if (is_null($administrateur)) {
            return $this->handleError('administarteur n\'existe pas!');
        }else{
            $p= administrateurResource::collection( $administrateur);
             $data= $p->toArray(request());
            $pdf = Pdf::loadView('pdf/All/Admin', [ 'data' => $data] )->setPaper('a3');
            return $pdf->download('administrateur.pdf');
        }
    }
}
