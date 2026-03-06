<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $file = fopen(database_path('/diem_thi_thpt_2024.csv'), 'r');

        $batchSize = 5000;
        $count = 0;
        $data = [];
        $header = fgetcsv($file);

        while (($row = fgetcsv($file)) !== false) {

            $data[] = [
                'sbd' => $row[0],
                'toan' => $row[1] ?: null,
                'ngu_van' => $row[2] ?: null,
                'ngoai_ngu' => $row[3] ?: null,
                'vat_li' => $row[4] ?: null,
                'hoa_hoc' => $row[5] ?: null,
                'sinh_hoc' => $row[6] ?: null,
                'lich_su' => $row[7] ?: null,
                'dia_li' => $row[8] ?: null,
                'gdcd' => $row[9] ?: null,
                'ma_ngoai_ngu' => $row[10] ?: null,
                'created_at' => now(),
                'updated_at' => now(),
            ];

            if (count($data) === $batchSize) {
                DB::table('students_scores')->insert($data);
                $data = [];
                $count++;
                echo "Completed batch " . $count . "\n";
            }
        }

        if (!empty($data)) {
            DB::table('students_scores')->insert($data);
            echo "Completed final batch\n";
        }

        fclose($file);
        echo "All batches completed.\n";
    }
}
