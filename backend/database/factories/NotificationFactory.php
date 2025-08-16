<?php

namespace Database\Factories;

use App\Models\notification;
use App\Models\user;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\DB;

class NotificationFactory extends Factory{
    protected $model = notification::class;
    public function definition(): array{
        $date = $this->faker->dateTimeBetween('-5 month', 'now');
        $types = ['Paiement', 'Panne', 'Réclamation', 'Autres'];
        $etat = ['Lu', 'non lu', 'archivé', 'supprimé'];
        $user_id = user::all()->random()->id;
        $type_notification = $this->faker->randomElement($types);
        $description_notification = '';

        switch ($type_notification) {
            case 'Paiement':
                $description_notification = 'Nous vous informons que votre facture d\'électricité est en retard de paiement. Veuillez régulariser votre situation dans les plus brefs délais pour éviter des frais supplémentaires.';
                break;
            case 'Panne':
                $description_notification = 'Nous avons détecté une panne dans votre zone. Nos équipes travaillent actuellement pour rétablir l\'alimentation électrique.';
                break;
            case 'Réclamation':
                $description_notification = 'Votre réclamation a été enregistrée et sera traitée dans les plus brefs délais.';
                break;
            case 'Autres':
                $description_notification = 'Nous vous informons que des travaux de maintenance sont prévus dans votre quartier. Vous pourriez subir une interruption de l\'alimentation électrique durant cette période. Nous vous prions de nous excuser pour la gêne occasionnée.';
                break;
            default:
                $description_notification = $this->faker->sentence;
                break;
        }

        return [
            'user_id' => $user_id,
            'type_notification' => $type_notification,
            'description_notification' => $description_notification,
            'date_notification' => $date,
            'etat_lecture' => $this->faker->randomElement($etat),
        ];
    }
}
