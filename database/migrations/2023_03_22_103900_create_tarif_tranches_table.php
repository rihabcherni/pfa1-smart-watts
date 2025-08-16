<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration{
    public function up(): void{
        Schema::create('tarif_tranches', function (Blueprint $table) {
            $table->increments('id');
            $table->enum('nom_tranche', ['matin', 'aprés-midi','soir','nuit'])->unique();
            $table->time('heure_debut')->unique();
            $table->time('heure_fin')->unique();
            $table->float('prix_unitaire_kilowatt');
            $table->timestamps();

        });
    }
    public function down(): void{
        Schema::dropIfExists('tarif_tranches');
    }
};
