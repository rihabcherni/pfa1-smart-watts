<?php

use App\Http\Controllers\Admin\crud\AdministrateurController;
use App\Http\Controllers\Admin\crud\AgentMaintenanceController;
use App\Http\Controllers\Admin\crud\ClientController;
use App\Http\Controllers\Admin\crud\compteurIntelligentController;
use App\Http\Controllers\Admin\crud\consoTranchesJourController;
use App\Http\Controllers\Admin\crud\ContactController;
use App\Http\Controllers\Admin\crud\FactureController;
use App\Http\Controllers\Admin\crud\LogementController;
use App\Http\Controllers\Admin\crud\NotificationController;
use App\Http\Controllers\Admin\crud\PaiementController;
use App\Http\Controllers\Admin\crud\ReclamationController;
use App\Http\Controllers\Admin\crud\PanneController;
use App\Http\Controllers\Admin\crud\ReparerController;
use App\Http\Controllers\Admin\crud\TarifTrancheController;
use App\Http\Controllers\Admin\Dashboard\GlobalStatController;
use Illuminate\Support\Facades\Route;
/**                                    crud                                      */
    Route::apiResource('administrateur', AdministrateurController::class);
    Route::get('/administrateur-csv', [AdministrateurController::class,'exportInfoCSV']);
    Route::get('/administrateur-excel', [AdministrateurController::class,'exportInfoExcel']);
    Route::get('/administrateur-all-pdf', [AdministrateurController::class,'pdfAll']);
    Route::get('/administrateur-pdf/{id}', [AdministrateurController::class,'pdf']);

    Route::apiResource('agent-maintenance', AgentMaintenanceController::class);
    Route::get('/agent-maintenance-csv', [AgentMaintenanceController::class,'exportInfoCSV']);
    Route::get('/agent-maintenance-excel', [AgentMaintenanceController::class,'exportInfoExcel']);
    Route::get('/agent-maintenance-all-pdf', [AgentMaintenanceController::class,'pdfAll']);
    Route::get('/agent-maintenance-pdf/{id}', [AgentMaintenanceController::class,'pdf']);


    Route::apiResource('client', ClientController::class);
    Route::get('/client-csv', [ClientController::class,'exportInfoCSV']);
    Route::get('/client-excel', [ClientController::class,'exportInfoExcel']);
    Route::get('/client-all-pdf', [ClientController::class,'pdfAll']);
    Route::get('/client-pdf/{id}', [ClientController::class,'pdf']);

    Route::apiResource('compteur-intelligent', compteurIntelligentController::class);
    Route::get('/compteur-intelligent-csv', [compteurIntelligentController::class,'exportInfoCSV']);
    Route::get('/compteur-intelligent-excel', [compteurIntelligentController::class,'exportInfoExcel']);
    Route::get('/compteur-intelligent-all-pdf', [compteurIntelligentController::class,'pdfAll']);
    Route::get('/compteur-intelligent-pdf/{id}', [compteurIntelligentController::class,'pdf']);


    Route::apiResource('consommation-journaliere', consoTranchesJourController::class);
    Route::get('/consommation-journaliere-csv', [consoTranchesJourController::class,'exportInfoCSV']);
    Route::get('/consommation-journaliere-excel', [consoTranchesJourController::class,'exportInfoExcel']);
    Route::get('/consommation-journaliere-all-pdf', [consoTranchesJourController::class,'pdfAll']);
    Route::get('/consommation-journaliere-pdf/{id}', [consoTranchesJourController::class,'pdf']);

    Route::apiResource('contact', ContactController::class);
    Route::get('/contact-csv', [ContactController::class,'exportInfoCSV']);
    Route::get('/contact-excel', [ContactController::class,'exportInfoExcel']);
    Route::get('/contact-all-pdf', [ContactController::class,'pdfAll']);
    Route::get('/contact-pdf/{id}', [ContactController::class,'pdf']);

    Route::apiResource('facture', FactureController::class);
    Route::get('/facture-csv', [FactureController::class,'exportInfoCSV']);
    Route::get('/facture-excel', [FactureController::class,'exportInfoExcel']);
    Route::get('/facture-all-pdf', [FactureController::class,'pdfAll']);
    Route::get('/facture-pdf/{id}', [FactureController::class,'pdf']);

    Route::apiResource('logement', LogementController::class);
    Route::get('/logement-csv', [LogementController::class,'exportInfoCSV']);
    Route::get('/logement-excel', [LogementController::class,'exportInfoExcel']);
    Route::get('/logement-all-pdf', [LogementController::class,'pdfAll']);
    Route::get('/logement-pdf/{id}', [LogementController::class,'pdf']);

    Route::apiResource('notification', NotificationController::class);
    Route::get('/notification-csv', [NotificationController::class,'exportInfoCSV']);
    Route::get('/notification-excel', [NotificationController::class,'exportInfoExcel']);
    Route::get('/notification-all-pdf', [NotificationController::class,'pdfAll']);
    Route::get('/notification-pdf/{id}', [NotificationController::class,'pdf']);

    Route::apiResource('paiement', PaiementController::class);
    Route::get('/paiement-csv', [PaiementController::class,'exportInfoCSV']);
    Route::get('/paiement-excel', [PaiementController::class,'exportInfoExcel']);
    Route::get('/paiement-all-pdf', [PaiementController::class,'pdfAll']);
    Route::get('/paiement-pdf/{id}', [PaiementController::class,'pdf']);

    Route::apiResource('reclamation', ReclamationController::class);
    Route::get('/reclamation-csv', [ReclamationController::class,'exportInfoCSV']);
    Route::get('/reclamation-excel', [ReclamationController::class,'exportInfoExcel']);
    Route::get('/reclamation-all-pdf', [ReclamationController::class,'pdfAll']);
    Route::get('/reclamation-pdf/{id}', [ReclamationController::class,'pdf']);

    Route::apiResource('Panne', PanneController::class);
    Route::get('/Panne-csv', [PanneController::class,'exportInfoCSV']);
    Route::get('/Panne-excel', [PanneController::class,'exportInfoExcel']);
    Route::get('/Panne-all-pdf', [PanneController::class,'pdfAll']);
    Route::get('/Panne-pdf/{id}', [PanneController::class,'pdf']);

    Route::apiResource('tarif-tranche', TarifTrancheController::class);
    Route::get('/tarif-tranche-csv', [TarifTrancheController::class,'exportInfoCSV']);
    Route::get('/tarif-tranche-excel', [TarifTrancheController::class,'exportInfoExcel']);
    Route::get('/tarif-tranche-all-pdf', [TarifTrancheController::class,'pdfAll']);
    Route::get('/tarif-tranche-pdf/{id}', [TarifTrancheController::class,'pdf']);

    Route::apiResource('reparer', ReparerController::class);
    Route::get('/reparer-csv', [ReparerController::class,'exportInfoCSV']);
    Route::get('/reparer-excel', [ReparerController::class,'exportInfoExcel']);
    Route::get('/reparer-all-pdf', [ReparerController::class,'pdfAll']);
    Route::get('/reparer-pdf/{id}', [ReparerController::class,'pdf']);


    Route::get('/glob-stat-admin',[GlobalStatController::class,'globStatAdmin']);





