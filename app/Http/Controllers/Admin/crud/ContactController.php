<?php

namespace App\Http\Controllers\Admin\crud;

use App\Models\contact;
use App\Http\Controllers\BaseController as BaseController;
use App\Http\Requests\ContactRequest;
use App\Http\Resources\ContactResource;

class ContactController extends BaseController{
    protected $model = contact::class;
    protected $resource = ContactResource::class;

    public function index($resource = null) {
        return parent::index($this->resource);
    }
    public function show($id , $resource=null){
        return parent::show($id, $this->resource);
    }

    public function store(ContactRequest $request){
        $input = $request->all();
        $contact = contact::create($input);
        return $this->handleResponse(new ContactResource($contact), 'contact crée!');
    }

    public function update(ContactRequest $request, contact $contact){
        //
    }
    public function destroy(contact $contact){
        //
    }
}
