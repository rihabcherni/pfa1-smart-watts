<?php

namespace App\Http\Controllers\Admin\crud;

use App\Exports\ClientExport;
use App\Models\client;
use App\Http\Resources\ClientResource;
use App\Http\Controllers\BaseController as BaseController;
use App\Http\Requests\userRequest;
use App\Models\user;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Hash;
use Maatwebsite\Excel\Facades\Excel;

class ClientController extends BaseController{
    protected $model = client::class;
    protected $resource = ClientResource::class;

    public function index($resource = null) {
        return parent::index($this->resource);
    }
    public function show($id , $resource=null){
        return parent::show($id, $this->resource);
    }

    public function store(userRequest $request){
        $userData = $request->all();
        if ($image = $request->file('photo')) {
            $destinationPath = 'images/client';
            $profileImage = date('YmdHis') . "." . $image->getClientOriginalExtension();
            $image->move($destinationPath, $profileImage);
            $userData['photo'] = "$profileImage";
        }
        $user = user::create($userData);
        $clientData['user_id'] = $user->id;
        $client = Client::create($clientData);
        return $this->handleResponse(new ClientResource($client), 'Client créé avec succès!');
    }

    public function update(userRequest $request, user $client){
        $input = $request->all();
        if(!($request->mot_de_passe==null)){
            $input['mot_de_passe'] = Hash::make($input['mot_de_passe']);
        }
        $client= $client->update($input);
        return $this->handleResponse($client, 'client modifié avec succes');
    }

    public function destroy($id) {
        $client =client::find($id);
        if (is_null($client)) {
            return $this->handleError('client n\'existe pas!');
        }
        else{
            $client->delete();
            return $this->handleResponse(new clientResource($client), 'client supprimé!');
        }
    }
    public function exportInfoExcel(){
        return Excel::download(new ClientExport  , 'client-liste.xlsx');
    }
    public function exportInfoCSV(){
        return Excel::download(new clientExport, 'client-liste.csv');
    }

    public function pdf($id){
        $client = client::find($id);
        if (is_null($client)) {
            return $this->handleError('Client n\'existe pas!');
        }else{
            $clientResource = new clientResource($client);
            $data = $clientResource->toArray(request());
            $pdf = Pdf::loadView('pdf/unique/Client', $data);
            return $pdf->download('client.pdf');
        }
    }
    public function pdfAll(){
        $client = client::all();
        if (is_null($client)) {
            return $this->handleError(' Client Maintenance n\'existe pas!');
        }else{
            $p= clientResource::collection( $client);
             $data= $p->toArray(request());
            $pdf = Pdf::loadView('pdf/All/Client', [ 'data' => $data] )->setPaper('a3');
            return $pdf->download('client.pdf');
        }
    }
}
