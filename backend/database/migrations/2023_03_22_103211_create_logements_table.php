<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration{
    public function up(): void{
        Schema::create('logements', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('client_id')->unsigned();
            $table->foreign('client_id')->references('id')->on('clients')->constrained('clients')->onDelete('cascade')->onUpdate('cascade');
            $table->string('adresse_logement',40);
            $table->string('code_Postal',20);
            $table->string('region',20);
            $table->timestamps();

        });
        Schema::enableForeignKeyConstraints();
    }
    public function down(): void{
        Schema::table("logements",function(Blueprint $table){
            $table->dropForeignKey("client_id");
        });
        Schema::dropIfExists('logements');
    }
};
