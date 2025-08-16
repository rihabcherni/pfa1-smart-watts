<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration{
    public function up(): void{
        Schema::create('pannes', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('compteur_intelligent_id')->unsigned();
            $table->foreign('compteur_intelligent_id')->references('id')->on('compteur_intelligents')->constrained('compteur_intelligents')->onDelete('cascade')->onUpdate('cascade');
            $table->enum('type_panne',['materiels','logiciel','communication','configuration','alimentation éléctrique','sécurité','autre'])->nullable();
            $table->dateTime('date_debut_panne');
            $table->dateTime('date_fin_panne');
            $table->text('description_panne');
            $table->float('cout_panne',8,2);
            $table->timestamps();

        });
        Schema::enableForeignKeyConstraints();
    }
    public function down(): void{
        Schema::table("pannes",function(Blueprint $table){
            $table->dropForeignKey("compteur_intelligent_id");
        });
        Schema::dropIfExists('pannes');
    }
};
