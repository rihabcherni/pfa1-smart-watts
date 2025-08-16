<?php

namespace App\Exports;

use App\Models\TarifTranche;
use App\Models\tranche;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class TarifTrancheExport implements FromCollection ,WithHeadings{
    public function headings():array{
        return[
            "ID",
            "nom_tranche",
            "heure_debut",
            "heure_fin",
            "prix_unitaire_kilowatt",
            "Crée le",
            "Modifié le",
        ];
    }

    public function collection()
    {
        return collect(TarifTranche::getTarif());
    }
}
