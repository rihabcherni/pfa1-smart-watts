<?php

namespace App\Http\Controllers;
use App\Http\Controllers\BaseController as BaseController;

use Illuminate\Http\Request;

class CrudController extends BaseController{
    protected $model;



    public function update(Request $request, $id)
    {
        $input = $request->all();
        $item = $this->model::findOrFail($id);
        $item->update($input);
        return $this->handleResponse($item, class_basename($this->model).' modifié!');
    }

    public function destroy($id)
    {
        $item = $this->model::find($id);
        if (is_null($item)) {
            return $this->handleError(class_basename($this->model).' n\'existe pas!');
        } else {
            $item->delete();
            return $this->handleResponse($item, class_basename($this->model).' supprimé!');
        }
    }
}
