<?php

namespace App\Http\Controllers\Admin\crud;

use App\Models\TarifTranche;
use App\Http\Controllers\BaseController as BaseController;
use App\Http\Requests\TarifTrancheRequest;
use App\Http\Resources\TarifTrancheResource;

class TarifTrancheController extends BaseController{
    protected $model = TarifTranche::class;
    protected $resource = TarifTrancheResource::class;
    public function index($resource = null) {
        return parent::index($this->resource);
    }
    public function show($id , $resource=null){
        return parent::show($id, $this->resource);
    }

    public function store(TarifTrancheRequest $request){
        $input = $request->all();
        $Tranche = TarifTranche::create($input);
        return $this->handleResponse(new TarifTrancheResource($Tranche), 'Tranche crée!');
    }

    public function update(TarifTrancheRequest $request, TarifTranche $Tranche){
        //
    }

    public function destroy(TarifTranche $Tranche){
        //
    }
}
