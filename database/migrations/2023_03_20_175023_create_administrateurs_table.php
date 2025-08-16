<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration{
    public function up(): void{
        Schema::create('administrateurs', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned()->unique();
            $table->foreign('user_id')->references('id')->on('users')->constrained('users')
            ->onDelete('cascade')->onUpdate('cascade');
            $table->timestamps();

        });
        Schema::enableForeignKeyConstraints();
    }
    public function down(): void{
        Schema::table("administrateurs",function(Blueprint $table){
            $table->dropForeignKey("user_id");
        });
        Schema::dropIfExists('administrateurs');
    }
};
