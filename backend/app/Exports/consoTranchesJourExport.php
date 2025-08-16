<?php

namespace App\Exports;

use App\Models\consoTranchesJour;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class consoTranchesJourExport implements FromCollection ,WithHeadings{
    public function headings():array{
        return[
            "ID",
            "compteur_intelligent_id",
            "tarif_tranche_id",
            "date_consommation",
            "index_recent_tranche",
            "Crée le",
            "Modifié le",
        ];
    }

    public function collection()
    {
        return collect(consoTranchesJour::getConsommation());
    }
}
