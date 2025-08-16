<?php

namespace App\Http\Controllers\Admin\crud;

use App\Exports\AgentMaintenanceExport;
use App\Http\Controllers\BaseController as BaseController;
use App\Http\Requests\userRequest;
use App\Models\agentMaintenance;
use App\Http\Resources\AgentMaintenanceResource;
use App\Models\user;
use Illuminate\Support\Facades\Hash;
use Maatwebsite\Excel\Facades\Excel;
use Barryvdh\DomPDF\Facade\Pdf;

class AgentMaintenanceController extends BaseController{
    protected $model = agentMaintenance::class;
    protected $resource = AgentMaintenanceResource::class;

    public function index($resource = null) {
        return parent::index($this->resource);
    }
    public function show($id , $resource=null){
        return parent::show($id, $this->resource);
    }
    public function store(userRequest $request){
        $userData = $request->all();
        if ($image = $request->file('photo')) {
            $destinationPath = 'images/agentMaintenance';
            $profileImage = date('YmdHis') . "." . $image->getClientOriginalExtension();
            $image->move($destinationPath, $profileImage);
            $userData['photo'] = "$profileImage";
        }
        $user = user::create($userData);
        $agentMaintenanceData['user_id'] = $user->id;
        $agentMaintenance = agentMaintenance::create($agentMaintenanceData);
        return $this->handleResponse(new agentMaintenanceResource($agentMaintenance), 'agent maintenance créé avec succès!');
    }
    public function update(userRequest $request, user $agentMaintenance){
        $input = $request->all();
        if(!($request->mot_de_passe==null)){
            $input['mot_de_passe'] = Hash::make($input['mot_de_passe']);
        }
        $agentMaintenance= $agentMaintenance->update($input);
        return $this->handleResponse($agentMaintenance, 'agentMaintenance modifié avec succes');
    }

    public function destroy($id) {
        $agentMaintenance =agentMaintenance::find($id);
        if (is_null($agentMaintenance)) {
            return $this->handleError('agentMaintenance n\'existe pas!');
        }
        else{
            $agentMaintenance->delete();
            return $this->handleResponse(new agentMaintenanceResource($agentMaintenance), 'agentMaintenance supprimé!');
        }
    }
    public function exportInfoExcel(){
        return Excel::download(new AgentMaintenanceExport  , 'agentMaintenance-liste.xlsx');
    }
    public function exportInfoCSV(){
        return Excel::download(new agentMaintenanceExport, 'agentMaintenance-liste.csv');
    }

    public function pdf($id){
        $agentMaintenance = agentMaintenance::find($id);
        if (is_null($agentMaintenance)) {
            return $this->handleError('Agent n\'existe pas!');
        }else{
            $agentMaintenanceResource = new agentMaintenanceResource($agentMaintenance);
            $data = $agentMaintenanceResource->toArray(request());
            $pdf = Pdf::loadView('pdf/unique/Agent', $data);
            return $pdf->download('agentMaintenance.pdf');
        }
    }
    public function pdfAll(){
        $agentMaintenance = agentMaintenance::all();
        if (is_null($agentMaintenance)) {
            return $this->handleError(' agent Maintenance n\'existe pas!');
        }else{
            $p= agentMaintenanceResource::collection( $agentMaintenance);
             $data= $p->toArray(request());
            $pdf = Pdf::loadView('pdf/All/Agent', [ 'data' => $data] )->setPaper('a3');
            return $pdf->download('agentMaintenance.pdf');
        }
    }
}
