<?php

namespace App\Exports;

use App\Models\logement;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class LogementExport implements FromCollection ,WithHeadings{
    public function headings():array{
        return[
            "ID",
            "client_id",
            "adresse_logement",
            "code_Postal",
            "region",
            "Crée le",
            "Modifié le",
        ];
    }

    public function collection()
    {
        return collect(logement::getLogement());
    }
}
