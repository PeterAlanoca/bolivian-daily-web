<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\DashboardController;

Route::get('/', [HomeController::class, 'index'])->name('home');

// ===================== ADMIN PANEL =====================
Route::prefix('admin')->name('admin.')->group(function () {
    // Auth
    Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');
    Route::post('/login', [AuthController::class, 'login'])->name('login.submit');
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

    // Protected Admin Routes
    Route::middleware(['auth', 'admin'])->group(function () {
        Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
        
        // Modules
        Route::resource('users', \App\Http\Controllers\Admin\UserController::class)->except(['show']);
        Route::resource('categories', \App\Http\Controllers\Admin\CategoryController::class)->except(['show']);
        Route::resource('sources', \App\Http\Controllers\Admin\SourceController::class)->except(['show']);
        Route::resource('news', \App\Http\Controllers\Admin\NewsController::class);
    });

    // Cualquier otra ruta no registrada dentro de /admin/ resultará en un 404
    Route::any('{any}', function () {
        abort(404);
    })->where('any', '.*');
});

// ===================== FRONTEND PUBLICO =====================
// Wildcards MUST go after specific routes
Route::get('/{category}', [CategoryController::class, 'show'])->name('category.show');
Route::get('/{category}/{url}', [NewsController::class, 'show'])->name('news.show');

