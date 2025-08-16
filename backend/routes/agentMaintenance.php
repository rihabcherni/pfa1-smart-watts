<?php

use App\Http\Controllers\AgentMaintenance\Dashboard\GlobalStatController;
use Illuminate\Support\Facades\Route;

/**                                 Dashboard                                    */
    Route::get('/glob-stat-agent',[GlobalStatController::class,'globStatAgent']);


/**                                    Auth                                      */
    Route::group(['prefix' => 'auth-agent-maintenance'], function () {
        Route::group(['middleware'=>['auth:sanctum']], function() {
    });
});
