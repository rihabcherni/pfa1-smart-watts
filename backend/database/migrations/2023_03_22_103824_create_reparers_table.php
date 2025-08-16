<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration{
    public function up(): void{
        Schema::create('reparers', function (Blueprint $table) {
            $table->integer('agent_maintenance_id')->unsigned();
            $table->foreign('agent_maintenance_id')->references('id')->on('agent_maintenances')
            ->constrained('agent_maintenances')->onDelete('cascade')->onUpdate('cascade');
            $table->integer('panne_id')->unsigned();
            $table->foreign('panne_id')->references('id')->on('pannes')
            ->constrained('pannes')->onDelete('cascade')->onUpdate('cascade');
            $table->timestamps();
        });
        Schema::enableForeignKeyConstraints();
    }
    public function down(): void{
        Schema::table("agent_maintenances",function(Blueprint $table){
            $table->dropForeignKey("agent_maintenance_id");
        });
        Schema::table("pannes",function(Blueprint $table){
            $table->dropForeignKey("panne_id");
        });
        Schema::dropIfExists('factures');
    }
};

