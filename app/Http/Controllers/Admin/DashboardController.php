<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\News;
use App\Models\Category;
use App\Models\User;

class DashboardController extends Controller
{
    public function index()
    {
        $stats = [
            'news_count' => News::count(),
            'categories_count' => Category::count(),
            'users_count' => User::count(),
        ];
        
        return view('admin.dashboard.index', compact('stats'));
    }
}
