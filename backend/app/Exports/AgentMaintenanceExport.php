<?php

namespace App\Exports;

use App\Models\agentMaintenance;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class AgentMaintenanceExport implements FromCollection ,WithHeadings{
    public function headings():array{
        return[
            "ID",
            "user_id",
            "Crée le",
            "Modifié le",
        ];
    }

    public function collection()
    {
        return collect(agentMaintenance::getAgent());
    }
}
