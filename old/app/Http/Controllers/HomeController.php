<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\News;
use Illuminate\View\View;

class HomeController extends Controller
{
    public function index(): View
    {
        // Featured hero story (latest active news with image)
        $hero = News::with(['category', 'multimedia'])
            ->where('state', 'A')
            ->orderBy('publication_date', 'desc')
            ->first();

        // Next 3 featured stories
        $featured = News::with(['category', 'multimedia'])
            ->where('state', 'A')
            ->when($hero, fn($q) => $q->where('id', '!=', $hero->id))
            ->orderBy('publication_date', 'desc')
            ->take(3)
            ->get();

        // All active categories with their latest news
        $categories = Category::where('state', 'A')
            ->with(['news' => function ($q) use ($hero, $featured) {
                $excludeIds = collect([$hero?->id])
                    ->merge($featured->pluck('id'))
                    ->filter()
                    ->all();

                $q->with(['multimedia'])
                    ->where('state', 'A')
                    ->whereNotIn('id', $excludeIds)
                    ->orderBy('publication_date', 'desc')
                    ->take(5);
            }])
            ->get()
            ->filter(fn($cat) => $cat->news->count() > 0);

        // Most read (latest 5)
        $mostRead = News::where('state', 'A')
            ->orderBy('publication_date', 'desc')
            ->take(5)
            ->get();

        return view('home.index', compact('hero', 'featured', 'categories', 'mostRead'));
    }
}
