<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration{
    public function up(): void {
        Schema::create('notifications', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users')
            ->constrained('users')->onDelete('cascade')->onUpdate('cascade');
            $table->enum('type_notification', ['Paiement', 'Panne', 'Réclamation', 'Autres']);
            $table->text('description_notification');
            $table->dateTime('date_notification');
            $table->string('etat_lecture');
            $table->timestamps();

        });
        Schema::enableForeignKeyConstraints();
    }
    public function down(): void{
        Schema::table("notifications",function(Blueprint $table){
            $table->dropForeignKey("user_id");
        });
        Schema::dropIfExists('notifications');
    }
};
