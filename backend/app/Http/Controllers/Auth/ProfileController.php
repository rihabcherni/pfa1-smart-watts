<?php
namespace App\Http\Controllers\Auth;
use App\Http\Controllers\BaseController as BaseController;
use App\Http\Requests\userRequest;
use App\Models\administrateur;
use App\Models\agentMaintenance;
use App\Models\client;
use App\Models\user;
use Laravel\Sanctum\PersonalAccessToken;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class ProfileController extends BaseController{
    public function profile(Request $request){
        $token = $request->bearerToken();
        $personalAccessToken = PersonalAccessToken::findToken($token);
        if (!$personalAccessToken) {
            return response()->json(['message' => 'Invalid token'], 401);
        }
        $user = $personalAccessToken->tokenable;
        $userTableName = '';
        $type_client = '';
        if ($user instanceof administrateur) {
            $userTableName = 'administrateur';
        }elseif ($user instanceof client) {
            $userTableName = 'client';
            $type_client = $user['type_client'];
        }elseif ($user instanceof agentMaintenance) {
            $userTableName = 'agentMaintenance';
        }
        if($user !=null){
            $user1= user::where('id',$user->user_id)->first();
        }
        return ["userTableName"=>$userTableName,"type"=>$type_client,"info"=>$user1];
    }
    public function modifierProfile(userRequest $request){
        $token = $request->bearerToken();
        $personalAccessToken = PersonalAccessToken::findToken($token);
        if (!$personalAccessToken) {
            return response()->json(['message' => 'Invalid token'], 401);
        }
        $user = $personalAccessToken->tokenable;
        if($user !=null){
            $user1= user::where('id',$user->user_id)->first();
            if ($user instanceof administrateur) {
                $user1->update($request->all());
                return response([
                    'table' => 'administrateur',
                    'user' => $user1,
                    'message'=> "profile mise à jour "
                ]);
            }elseif ($user instanceof client) {
                $user1->update($request->all());
                return response([
                    'table' => 'client',
                    'type_client'=>$user['type_client'],
                    'user' => $user1,
                    'message'=> "profile mise à jour "
                ]);
            }elseif ($user instanceof agentMaintenance) {
                $user1->update($request->all());
                return response([
                    'table' => 'agentMaintenance',
                    'user' => $user1,
                    'message'=> "profile mise à jour "
                ]);
            }
        }
    }
    public function imageProfile(Request $request, $user, $fileName) {
        $request->validate([
            'photo' => 'sometimes|nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        if($user !=null){
            if($request->hasFile('photo')){
                $image = $request->file('photo');
                $destinationPath = 'images/'.$fileName;
                $destination = 'images/'.$fileName.'/'.$user->photo;
                if(File::exists($destination)){
                    File::delete($destination);
                }
                $profileImage = date('YmdHis') . "." . $image->getClientOriginalExtension();
                $image->move($destinationPath, $profileImage);
                $input['photo'] = $profileImage;
                $user['photo'] =$input['photo'];
                $user->save();
                return response([
                    'status' => 200,
                    'user' =>$user,
                ]);
            }
            return response([
                'status' => 404,
                'photo' =>'error',
            ],404);
        }
    }
    public function updatePhotoProfile(Request $request){
        $token = $request->bearerToken();
        $personalAccessToken = PersonalAccessToken::findToken($token);
        if (!$personalAccessToken) {
            return response()->json(['message' => 'Invalid token'], 401);
        }
        $user = $personalAccessToken->tokenable;
        $userTableName = '';
        if ($user instanceof administrateur) {
            $userTableName = 'administrateur';
        }elseif ($user instanceof client) {
            $userTableName = 'client';
        }elseif ($user instanceof agentMaintenance) {
            $userTableName = 'agentMaintenance';
        }
        if($user !=null){
            $user1= user::where('id',$user->user_id)->first();
        }
        if($user1 !=null){
            return (new ProfileController)->imageProfile($request ,$user1,$userTableName);
        }else{
            return response([
                'status' => 404,
                'photo' =>'error',
            ],404);
        }
    }
}
