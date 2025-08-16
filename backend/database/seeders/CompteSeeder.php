<?php
namespace Database\Seeders;
use App\Models\user;
use App\Models\client;
use App\Models\agentMaintenance;
use App\Models\administrateur;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class CompteSeeder extends Seeder{
    public function run(){
        user::create([
            'nom'=> 'admin',
            'prenom'=> 'admin',
            'photo'=>'admin.png',
            'CIN'=> 12345678,
            'numero_telephone'=> 23657412,
            'email'=> 'admin.admin@admin',
            'mot_de_passe'=> Hash::make('admin'),
        ]);
        user::create([
            'nom'=> 'client',
            'prenom'=> 'client',
            'photo'=>'client.jpg',
            'CIN'=> 23456789,
            'numero_telephone'=> 25657412,
            'email'=> 'client.client@client',
            'mot_de_passe'=> Hash::make('client'),
        ]);
        user::create([
            'nom'=> 'agent',
            'prenom'=> 'agent',
            'photo'=>'agent.png',
            'CIN'=> 11345678,
            'numero_telephone'=> 27757412,
            'email'=> 'agent.agent@agent',
            'mot_de_passe'=> Hash::make('agent'),
        ]);
        administrateur::create([
            'user_id'=> '1',
        ]);
        client::create([
            'user_id'=> '2',
            'type_client'=>'residentiel'
        ]);
        agentMaintenance::create([
            'user_id'=> '3',
        ]);
    }
}
