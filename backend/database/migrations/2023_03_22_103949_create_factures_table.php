<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration{
    public function up(): void{
        Schema::create('factures', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('compteur_intelligent_id')->unsigned();
            $table->foreign('compteur_intelligent_id')->references('id')->on('compteur_intelligents')->constrained('compteur_intelligents')->onDelete('cascade')->onUpdate('cascade');
            $table->float('montant_total_consommation');
            $table->float('montant_total_optimale');
            $table->tinyInteger('mois_facturation')->unsigned()->between(1, 12);
            $table->date('date_facture');
            $table->string('statut_facturation',50);
            $table->timestamps();

        });
        Schema::enableForeignKeyConstraints();
    }
    public function down(): void{
        Schema::table("conso_tranches_jours",function(Blueprint $table){
            $table->dropForeignKey("compteur_intelligent_id");
        });
        Schema::dropIfExists('factures');
    }
};
