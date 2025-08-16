<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration{
    public function up(): void{
        Schema::create('contacts', function (Blueprint $table) {
            $table->increments('id');
            $table->string("nom");
            $table->string("prenom");
            $table->string("email");
            $table->string("numero_telephone");
            $table->text("message");
            $table->timestamps();

        });
    }
    public function down(): void{
        Schema::dropIfExists('contacts');
    }
};
