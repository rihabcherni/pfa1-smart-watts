<?php

namespace App\Exports;

use App\Models\notification;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class NotificationExport implements FromCollection ,WithHeadings{
    public function headings():array{
        return[
            "ID",
            "user_id",
            "type_notification",
            "description_notification",
            "date_notification",
            "etat_lecture",
            "Crée le",
            "Modifié le",
        ];
    }

    public function collection()
    {
        return collect(notification::getNotification());
    }
}
