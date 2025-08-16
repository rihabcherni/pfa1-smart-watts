<?php

namespace App\Exports;

use App\Models\facture;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class FactureExport implements FromCollection ,WithHeadings{
    public function headings():array{
        return[
            "ID",
            "compteur_intelligent_id",
            "montant_total_consommation",
            "montant_total_optimale",
            "mois_facturation",
            "date_facture",
            "statut_facturation",
            "Crée le",
            "Modifié le",
        ];
    }

    public function collection()
    {
        return collect(facture::getFacture());
    }
}
