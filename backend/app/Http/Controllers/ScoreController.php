<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\StudentScore;

class ScoreController extends Controller
{
    private const SUBJECTS = [
        'toan',
        'ngu_van',
        'ngoai_ngu',
        'vat_li',
        'hoa_hoc',
        'sinh_hoc',
        'lich_su',
        'dia_li',
        'gdcd'
    ];

    #Feature 1
    public function findBySbd($sbd)
    {
        $score = StudentScore::find($sbd);

        if (!$score) {
            return response()->json([
                'message' => 'Student not found'
            ], 404);
        }

        return response()->json($score);
    }

    #Feature 2
    public function getStats(Request $request)
    {
        #Get subject from query parameter, default to 'toan' if not provided
        $subject = $request->query('subject');
        if (!$subject) {
            $subject = 'toan';
        }

        #Check if the subject is valid
        if (!in_array($subject, self::SUBJECTS)) {
            return response()->json([
                'message' => 'Invalid subject'
            ], 400);
        }

        $stat =  DB::table('students_scores')
            ->selectRaw("
            COUNT(*) FILTER (WHERE $subject >= 8) as level1,
            COUNT(*) FILTER (WHERE $subject >= 6 AND $subject < 8) as level2,
            COUNT(*) FILTER (WHERE $subject >= 4 AND $subject < 6) as level3,
            COUNT(*) FILTER (WHERE $subject < 4) as level4
        ")
            ->first();
        return response()->json($stat);
    }

    #Feature 3
    public function getTop10GroupA()
    {
        $top10 = DB::table('students_scores')
            ->select(
                'sbd',
                'toan',
                'vat_li',
                'hoa_hoc',
                DB::raw('(toan + vat_li + hoa_hoc) as total')
            )
            ->whereNotNull('toan')
            ->whereNotNull('vat_li')
            ->whereNotNull('hoa_hoc')
            ->orderByDesc('total')
            ->limit(10)
            ->get();
        if ($top10->isEmpty()) {
            return response()->json([
                'message' => 'Not found any scores for Group A'
            ], 404);
        }

        return response()->json($top10);
    }
}
