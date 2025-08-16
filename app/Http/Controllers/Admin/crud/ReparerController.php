<?php

namespace App\Http\Controllers\Admin\crud;

use App\Models\Reparer;
use App\Http\Requests\ReparerRequest;
use App\Http\Controllers\BaseController as BaseController;
use App\Http\Resources\ReparerResource;

class ReparerController extends BaseController{
    protected $model = Reparer::class;
    protected $resource = ReparerResource::class;
    public function index($resource = null) {
        return parent::index($this->resource);
    }
    public function show($id , $resource=null){
        return parent::show($id, $this->resource);
    }
    public function store(ReparerRequest $request){
        $input = $request->all();
        $Reparer = Reparer::create($input);
        return $this->handleResponse(new ReparerResource($Reparer), ' Reparer crée!');
    }

    public function update(ReparerRequest $request, Reparer $Reparer){
        //
    }

    public function destroy(Reparer $Reparer){
        //
    }
}
