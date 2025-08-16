<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration{
    public function up(): void
    {
        Schema::create('compteur_intelligents', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('logement_id')->unsigned();
            $table->foreign('logement_id')->references('id')->on('logements')
            ->constrained('logements')->onDelete('cascade')->onUpdate('cascade');
            $table->date('date_Installation');
            $table->integer('index_ancien_mois');
            $table->boolean('etat_panne');
            $table->timestamps();

        });
        Schema::enableForeignKeyConstraints();
    }
    public function down(): void{
        Schema::table("compteur_intelligents",function(Blueprint $table){
            $table->dropForeignKey("logement_id");
        });
        Schema::dropIfExists('compteur_intelligents');
    }
};
