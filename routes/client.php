<?php

use App\Http\Controllers\client\crud\ReclamationController;
use App\Http\Controllers\client\Dashboard\GlobalStatController;
use Illuminate\Support\Facades\Route;

/**                                 Dashboard                                    */
Route::get('/glob-stat-client',[GlobalStatController::class,'globStatClient']);
Route::apiResource('reclamation-client',ReclamationController::class);

/**                                    Auth                                      */
    Route::group(['prefix' => 'auth-client'], function () {
        Route::group(['middleware'=>['auth:sanctum']], function() {

    });
});
