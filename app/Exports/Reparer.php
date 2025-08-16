<?php

namespace App\Exports;

use App\Models\reparer;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class ReparerExport implements FromCollection ,WithHeadings{
    public function headings():array{
        return[
            "ID",
            "panne_id",
            "agent_maintenance_id",
            "Crée le",
            "Modifié le",
        ];
    }

    public function collection()
    {
        return collect(reparer::getReparer());
    }
}
