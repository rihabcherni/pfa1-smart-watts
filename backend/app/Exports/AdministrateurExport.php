<?php

namespace App\Exports;

use App\Models\administrateur;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class AdministrateurExport implements FromCollection ,WithHeadings{
    public function headings():array{
        return[
            "ID",
            "user_id",
            "Crée le",
            "Modifié le",
        ];
    }
    public function collection(){
        return collect(administrateur::getAdministrateur());
    }
}
