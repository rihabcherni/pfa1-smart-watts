<?php

namespace App\Http\Controllers\Admin\crud;

use App\Models\consoTranchesJour;
use App\Http\Controllers\BaseController as BaseController;
use App\Http\Requests\consoTranchesJourRequest;
use App\Http\Resources\consoTranchesJourResource;

class consoTranchesJourController extends BaseController{
    protected $model = consoTranchesJour::class;
    protected $resource = consoTranchesJourResource::class;

    public function index($resource = null) {
        return parent::index($this->resource);
    }
    public function show($id , $resource=null){
        return parent::show($id, $this->resource);
    }

    public function store(consoTranchesJourRequest $request) {
        $input = $request->all();
        $consoTranchesJour = consoTranchesJour::create($input);
        return $this->handleResponse(new consoTranchesJourResource($consoTranchesJour), 'consommation Journaliere crée!');
    }


    public function update(consoTranchesJourRequest $request, consoTranchesJour $consoTranchesJour){
        //
    }

    public function destroy(consoTranchesJour $consoTranchesJour)
    {
        //
    }
}
