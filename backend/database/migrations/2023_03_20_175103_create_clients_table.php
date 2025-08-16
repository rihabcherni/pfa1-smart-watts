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
        Schema::create('clients', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned()->unique();
            $table->foreign('user_id')->references('id')->on('users')
            ->constrained('users')->onDelete('cascade')->onUpdate('cascade');
            $table->enum('type_client', ['residentiel', 'industriel','commercial','secteur-public', 'agricole']);
            $table->timestamps();

         });
         Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table("clients",function(Blueprint $table){
            $table->dropForeignKey("user_id");
        });
        Schema::dropIfExists('clients');
    }
};
