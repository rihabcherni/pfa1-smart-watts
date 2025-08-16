<?php

namespace App\Http\Controllers\Admin\crud;
use App\Models\reclamation;
use App\Http\Requests\ReclamationRequest;
use App\Http\Controllers\BaseController as BaseController;
use App\Http\Resources\ReclamationResource;

class ReclamationController extends BaseController{
    protected $model = reclamation::class;
    protected $resource = ReclamationResource::class;
    public function index($resource = null) {
        return parent::index($this->resource);
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
