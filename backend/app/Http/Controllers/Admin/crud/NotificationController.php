<?php

namespace App\Http\Controllers\Admin\crud;

use App\Models\notification;
use App\Http\Requests\NotificationRequest;
use App\Http\Controllers\BaseController as BaseController;
use App\Http\Resources\NotificationResource;

class NotificationController extends BaseController{
    protected $model = notification::class;
    protected $resource = NotificationResource::class;

    public function index($resource = null) {
        return parent::index($this->resource);
    }
    public function show($id , $resource=null){
        return parent::show($id, $this->resource);
    }

    public function store(NotificationRequest $request){
        $input = $request->all();
        $notification = notification::create($input);
        return $this->handleResponse(new NotificationResource($notification), 'notification crée!');
    }

    public function update(NotificationRequest $request, notification $notification){
        //
    }

    public function destroy(notification $notification){
        //
    }
}
