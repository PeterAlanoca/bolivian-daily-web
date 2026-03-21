<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\News;
use Illuminate\View\View;

class CategoryController extends Controller
{
    public function show(string $category): View
    {
        $category = Category::where('url', $category)->where('state', 'A')->firstOrFail();

        $news = News::with(['multimedia', 'category'])
            ->where('category_id', $category->id)
            ->where('state', 'A')
            ->orderBy('publication_date', 'desc')
            ->paginate(15);

        $featured = $news->first();

        $allCategories = Category::where('state', 'A')->get();

        return view('category.show', compact('category', 'news', 'featured', 'allCategories'));
    }
}
