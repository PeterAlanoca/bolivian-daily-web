<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\NewsController;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/{category}', [CategoryController::class, 'show'])->name('category.show');
Route::get('/{category}/{url}', [NewsController::class, 'show'])->name('news.show');

