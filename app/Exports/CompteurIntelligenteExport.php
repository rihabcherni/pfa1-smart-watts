<?php

namespace App\Exports;

use App\Models\compteurIntelligent;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class compteurIntelligentExport implements FromCollection ,WithHeadings{
    public function headings():array{
        return[
            "ID",
            "logement_id",
            "date_Installation",
            "index_ancien_mois",
            "etat_panne",
            "Crée le",
            "Modifié le",
        ];
    }

    public function collection()
    {
        return collect(compteurIntelligent::getCompteur());
    }
}
