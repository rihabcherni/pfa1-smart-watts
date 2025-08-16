<?php

namespace App\Exports;

use App\Models\paiement;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class PaiementExport implements FromCollection ,WithHeadings{
    public function headings():array{
        return[
            "ID",
            "facture_id",
            "date_paiement",
            "montant_paiement",
            "mode_paiement",
            "Crée le",
            "Modifié le",
        ];
    }

    public function collection()
    {
        return collect(paiement::getPaiement());
    }
}
