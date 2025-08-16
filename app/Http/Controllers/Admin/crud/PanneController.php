<?php

namespace App\Http\Controllers\Admin\crud;

use App\Models\Panne;
use App\Http\Requests\PanneRequest;
use App\Http\Controllers\BaseController as BaseController;
use App\Http\Resources\PanneResource;

class PanneController extends BaseController{
    protected $model = Panne::class;
    protected $resource = PanneResource::class;
    public function index($resource = null) {
        return parent::index($this->resource);
    }
    public function show($id , $resource=null){
        return parent::show($id, $this->resource);
    }
    public function store(PanneRequest $request){
        $input = $request->all();
        $Panne = Panne::create($input);
        return $this->handleResponse(new PanneResource($Panne), ' Panne crée!');
    }

    public function update(PanneRequest $request, Panne $Panne){
        //
    }

    public function destroy(Panne $Panne){
        //
    }
}
