<?php

namespace App\Exports;

use App\Models\client;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class ClientExport implements FromCollection ,WithHeadings{
    public function headings():array{
        return[
            "ID",
            "user_id",
            "type_client",
            "Crée le",
            "Modifié le",
        ];
    }

    public function collection()
    {
        return collect(client::getClient());
    }
}
