<?php

namespace App\Http\Controllers\Admin\crud;

use App\Models\logement;
use App\Http\Requests\LogementRequest;
use App\Http\Controllers\BaseController as BaseController;
use App\Http\Resources\LogementResource;

class LogementController extends BaseController{
    protected $model = logement::class;
    protected $resource = LogementResource::class;

    public function index($resource = null) {
        return parent::index($this->resource);
    }
    public function show($id , $resource=null){
        return parent::show($id, $this->resource);
    }


    public function store(LogementRequest $request){
        $input = $request->all();
        $logement = logement::create($input);
        return $this->handleResponse(new LogementResource($logement), 'logement crée!');
    }

    public function update(LogementRequest $request, logement $logement){
        //
    }

    public function destroy(logement $logement){
        //
    }
}
