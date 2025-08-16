<?php

namespace Database\Factories;

use App\Models\client;
use App\Models\compteurIntelligent;
use App\Models\reclamation;
use Illuminate\Database\Eloquent\Factories\Factory;

class ReclamationFactory extends Factory{
    protected $model = reclamation::class;


    public function definition(): array{
        $types = [
            'Erreur de facturation' => 'Le client a remarqué une erreur sur sa facture, le montant facturé est plus élevé que prévu ou ne correspond pas à sa consommation réelle.',
            'Installation de compteurs' => 'Le client a rencontré des problèmes lors de l\'installation de son compteur intelligent, tels que des retards, des erreurs ou des dommages.',
            'Problèmes de données' => 'Le client a signalé des problèmes avec les données de consommation enregistrées par son compteur intelligent, tels que des lectures incorrectes, des lacunes dans les données ou des problèmes de synchronisation.',
            'Problèmes de communication' => 'Le client a signalé des problèmes de communication entre son compteur intelligent et le système de suivi de la consommation, tels que des interruptions de service, des erreurs de transmission ou des problèmes de connectivité.',
            'Service client' => 'Le client a rencontré des problèmes avec le service client de la STEG, notamment en ce qui concerne les temps d\'attente, la qualité de l\'assistance ou la résolution des problèmes.',
            'Problèmes techniques' => 'Le client a signalé des problèmes techniques avec son compteur intelligent, tels que des erreurs d\'affichage, des dysfonctionnements ou des pannes.',
            'Problèmes de sécurité' => 'Le client a signalé des problèmes de sécurité liés à l\'utilisation de son compteur intelligent, tels que des risques de piratage ou d\'accès non autorisé.',
            'Autre' => 'Le client a signalé un problème qui ne rentre dans aucune des catégories précédentes.'
        ];
        $compteur_id = compteurIntelligent::all()->random()->id;

        $type = $this->faker->randomElement(array_keys($types));
        return [
            'compteur_intelligent_id' =>$compteur_id,
            'type_reclamation' => $type,
            'description_reclamation' => $types[$type],
            'date_reclamation' => $this->faker->dateTimeBetween('-30 month', 'now'),
            'etat_traitement' => $this->faker->boolean(),
        ];
    }
}
