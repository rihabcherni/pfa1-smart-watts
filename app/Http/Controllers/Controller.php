<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;
    public function handleResponse($result, $msg){
    	$res = [
            'success'=> true,
            'data'   => $result,
            'message'=> $msg,
        ];
        return response()->json($res, 200);
    }

    public function handleError($error, $errorMsg = [], $code = 404){
    	$res = [
            'success' => false,
            'message' => $error,
        ];
        if(!empty($errorMsg)){
            $res['data'] = $errorMsg;
        }
        return response()->json($res, $code);
    }
}
