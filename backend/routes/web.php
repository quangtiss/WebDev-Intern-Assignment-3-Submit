<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ScoreController;

Route::get('/', function () {
    return view('welcome');
});


Route::prefix('api')->group(
    function () {
        #Feature 1
        Route::get('/score/{sbd}', [ScoreController::class, 'findBySbd']);

        #Feature 2
        Route::get('/stats', [ScoreController::class, 'getStats']);

        #Feature 3
        Route::get('/top10-group-a', [ScoreController::class, 'getTop10GroupA']);
    }
);
