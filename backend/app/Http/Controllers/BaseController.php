<?php
namespace App\Http\Controllers;
use App\Http\Controllers\Controller as Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BaseController extends Controller{
    protected $model;
    public function index($resource){
        $items = $this->model::all();
        return $this->handleResponse($resource::collection($items), 'affichage des '.strtolower(class_basename($this->model)).'!');
    }
    public function show($id, $resource){
        $item = $this->model::find($id);
        if (is_null($item)) {
            return $this->handleError(class_basename($this->model).' n\'existe pas!');
        } else {
            return $this->handleResponse(new $resource($item), class_basename($this->model).' existe.');
        }
    }
}
