<?php

namespace App\Http\Controllers\Auth;
use App\Http\Controllers\BaseController as BaseController;
use Illuminate\Http\Request;
use Laravel\Sanctum\PersonalAccessToken;

class LogoutController extends BaseController{
    public function logout(Request $request){
        $token = $request->bearerToken();
        $personalAccessToken = PersonalAccessToken::findToken($token);
        if (!$personalAccessToken) {
            return response()->json(['message' => 'Invalid token'], 401);
        }
        $personalAccessToken->delete();
        return response()->json(['status' => 200, 'message' => 'Logged out successfully.']);
    }
}
