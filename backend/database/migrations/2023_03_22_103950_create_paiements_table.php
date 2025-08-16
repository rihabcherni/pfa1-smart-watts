<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration{
    public function up(): void{
        Schema::create('paiements', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('facture_id')->unsigned();
            $table->foreign('facture_id')->references('id')->on('factures')->constrained('factures')->onDelete('cascade')->onUpdate('cascade');
            $table->float('montant_paiement',8,2)->nullable();
            $table->datetime('date_paiement')->nullable();
            $table->enum('mode_paiement',['espece','carte de crédit','chèque','virement bancaire'])->nullable();
            $table->timestamps();

        });
        Schema::enableForeignKeyConstraints();
    }
    public function down(): void{
        Schema::table("paiements",function(Blueprint $table){
            $table->dropForeignKey("facture_id");
        });
        Schema::dropIfExists('paiements');
    }
};
