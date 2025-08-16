<?php

namespace App\Http\Controllers\Admin\crud;

use App\Models\compteurIntelligent;
use App\Http\Controllers\BaseController as BaseController;
use App\Http\Requests\compteurIntelligentRequest;
use App\Http\Resources\compteurIntelligentResource;

class compteurIntelligentController extends BaseController{
    protected $model = compteurIntelligent::class;
    protected $resource = compteurIntelligentResource::class;

    public function index($resource = null) {
        return parent::index($this->resource);
    }
    public function show($id , $resource=null){
        return parent::show($id, $this->resource);
    }

    public function store(compteurIntelligentRequest $request){
        $input = $request->all();
        $compteurIntelligent = compteurIntelligent::create($input);
        return $this->handleResponse(new compteurIntelligentResource($compteurIntelligent), 'compteurIntelligent crée!');
    }

    public function update(compteurIntelligentRequest $request, compteurIntelligent $compteurIntelligent){
        //
    }

    public function destroy(compteurIntelligent $compteurIntelligent){
        //
    }
}
