<?php

namespace App\Exports;

use App\Models\user;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class userExport implements FromCollection ,WithHeadings{
    public function headings():array{
        return[
            "ID",
            "nom",
            "prenom",
            "email",
            "CIN",
            "numero_telephone",
            "photo",
            "mot_de_passe",
            "Crée le",
            "Modifié le",
        ];
    }
    public function collection(){
        return collect(user::getUser());
    }
}
