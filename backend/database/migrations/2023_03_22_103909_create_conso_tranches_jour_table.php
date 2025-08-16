<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('conso_tranches_jours', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('compteur_intelligent_id')->unsigned();
            $table->foreign('compteur_intelligent_id')->references('id')->on('compteur_intelligents')->constrained('compteur_intelligents')->onDelete('cascade')->onUpdate('cascade');
            $table->integer('tarif_tranche_id')->unsigned();
            $table->foreign('tarif_tranche_id')->references('id')->on('tarif_tranches')->constrained('tarif_tranches')->onDelete('cascade')->onUpdate('cascade');
            $table->date('date_consommation');
            $table->integer('index_recent_tranche');
            $table->timestamps();

        });
        Schema::enableForeignKeyConstraints();
    }
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table("conso_tranches_jours",function(Blueprint $table){
            $table->dropForeignKey("compteur_intelligent_id");
            $table->dropForeignKey("tarif_tranche_id");
        });
        Schema::dropIfExists('conso_tranches_jours');
    }
};
