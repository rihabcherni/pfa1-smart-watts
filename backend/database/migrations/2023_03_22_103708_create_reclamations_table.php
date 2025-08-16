<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
return new class extends Migration{
    public function up(): void{
        Schema::create('reclamations', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('compteur_intelligent_id')->unsigned();
            $table->foreign('compteur_intelligent_id')->references('id')->on('compteur_intelligents')->constrained('compteur_intelligents')->onDelete('cascade')->onUpdate('cascade');
            $table->string('type_reclamation',40);
            $table->string('description_reclamation');
            $table->dateTime('date_reclamation');
            $table->boolean('etat_traitement');
            $table->timestamps();

        });
        Schema::enableForeignKeyConstraints();
    }
    public function down(): void {
        Schema::table("reclamations",function(Blueprint $table){
            $table->dropForeignKey("compteur_intelligent_id");
        });
        Schema::dropIfExists('reclamations');
    }
};
