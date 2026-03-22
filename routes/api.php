<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\NewsApiController;

Route::post('/news', [NewsApiController::class, 'store']);
