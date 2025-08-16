<?php

namespace App\Exports;

use App\Models\reclamation;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class ReclamationExport implements FromCollection ,WithHeadings{
    public function headings():array{
        return[
            "ID",
            "compteur_intelligent_id",
            "type_reclamation",
            "description_reclamation",
            "date_reclamation",
            "etat_traitement",
            "Crée le",
            "Modifié le",
        ];
    }

    public function collection()
    {
        return collect(reclamation::getReclamation());
    }
}
