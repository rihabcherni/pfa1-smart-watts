<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration{
    public function up(): void{
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nom');
            $table->string('prenom');
            $table->string('email')->unique();
            $table->string('CIN',8)->unique();
            $table->string('numero_telephone',12)->unique();
            $table->string('photo')->nullable();
            $table->string('mot_de_passe');
            $table->rememberToken();
            $table->timestamps();

        });
    }
    public function down(): void{
        Schema::dropIfExists('users');
    }
};
