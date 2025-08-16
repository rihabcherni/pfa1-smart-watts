<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\MotDePasseController;
use App\Http\Controllers\Auth\ProfileController;
use App\Http\Controllers\GlobalStatController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/login', [LoginController::class,'login']);
Route::post('/modifier-password', [MotDePasseController::class,'modifierPass']);
Route::middleware('auth:sanctum')->post('/logout', [LogoutController::class,'logout']);
Route::middleware('auth:sanctum')->get('/profile', [ProfileController::class,'profile']);
Route::middleware('auth:sanctum')->put('/modifier-profile', [ProfileController::class,'modifierProfile']);
Route::middleware('auth:sanctum')->post('/image-profile', [ProfileController::class,'updatePhotoProfile']);

Route::get('/glob-stat-internaute',[GlobalStatController::class,'globStatInternaute']);
