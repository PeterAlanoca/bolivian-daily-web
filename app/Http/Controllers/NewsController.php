<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\News;
use Illuminate\View\View;

class NewsController extends Controller
{
    public function show(string $category, string $url): View
    {
        // First get the category to ensure the URL matches
        $categoryObj = Category::where('url', $category)->where('state', 'A')->firstOrFail();

        $news = News::with(['category', 'multimedia', 'source', 'user'])
            ->where('category_id', $categoryObj->id)
            ->where('url', $url)
            ->where('state', 'A')
            ->firstOrFail();

        // Related news from the same category
        $related = News::with(['multimedia'])
            ->where('category_id', $news->category_id)
            ->where('id', '!=', $news->id)
            ->where('state', 'A')
            ->orderBy('publication_date', 'desc')
            ->take(5)
            ->get();

        $allCategories = Category::where('state', 'A')->get();

        return view('news.show', compact('news', 'related', 'allCategories'));
    }
}
