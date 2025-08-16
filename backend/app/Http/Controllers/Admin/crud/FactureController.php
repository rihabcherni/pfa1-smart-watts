<?php

namespace App\Http\Controllers\Admin\crud;

use App\Models\facture;
use App\Http\Requests\FactureRequest;
use App\Http\Controllers\BaseController as BaseController;
use App\Http\Resources\FactureResource;

class FactureController extends BaseController{
    protected $model = facture::class;
    protected $resource = FactureResource::class;

    public function index($resource = null) {
        return parent::index($this->resource);
    }
    public function show($id , $resource=null){
        return parent::show($id, $this->resource);
    }


    public function store(FactureRequest $request){
        $input = $request->all();
        $facture = facture::create($input);
        return $this->handleResponse(new FactureResource($facture), 'facture crée!');
    }

    public function update(FactureRequest $request, facture $facture){
        //
    }

    public function destroy(facture $facture){
        //
    }
}
