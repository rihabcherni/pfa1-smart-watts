<?php

namespace App\Http\Controllers\Admin\crud;

use App\Models\paiement;
use App\Http\Requests\PaiementRequest;
use App\Http\Controllers\BaseController as BaseController;
use App\Http\Resources\PaiementResource;

class PaiementController extends BaseController{
    protected $model = paiement::class;
    protected $resource = PaiementResource::class;

    public function index($resource = null) {
        return parent::index($this->resource);
    }
    public function show($id , $resource=null){
        return parent::show($id, $this->resource);
    }

    public function store(PaiementRequest $request){
        $input = $request->all();
        $paiement = paiement::create($input);
        return $this->handleResponse(new PaiementResource($paiement), 'paiement crée!');
    }

    public function update(PaiementRequest $request, paiement $paiement){
        //
    }

    public function destroy(paiement $paiement){
        //
    }
}
