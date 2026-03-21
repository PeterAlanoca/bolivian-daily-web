<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\News;
use App\Models\Category;
use App\Models\Source;
use App\Models\Multimedia;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class NewsController extends Controller
{
    public function index()
    {
        $news = News::with(['category', 'source', 'user'])->orderBy('id', 'desc')->paginate(15);
        return view('admin.news.index', compact('news'));
    }

    public function create()
    {
        $categories = Category::where('state', 'A')->orderBy('name')->get();
        $sources = Source::where('state', 'A')->orderBy('name')->get();
        return view('admin.news.create', compact('categories', 'sources'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'category_id' => 'required|exists:categories,id',
            'source_id' => 'required|exists:sources,id',
            'title' => 'required|string|max:255',
            'pretitle' => 'nullable|string|max:255',
            'subtitle' => 'nullable|string|max:500',
            'enter' => 'nullable|string|max:1000',
            'body' => 'required|string',
            'author' => 'nullable|string|max:255',
            'publication_date' => 'required|date',
            'state' => 'required|in:A,I',
            'image' => 'required|image|mimes:jpeg,png,jpg,webp|max:2048',
        ]);

        $category = Category::findOrFail($request->category_id);
        
        // Generate Slug (append random string to avoid collisions)
        $slug = Str::slug($request->title) . '-' . substr(uniqid(), -4);
        $path = '/' . $category->url . '/' . $slug;

        $news = News::create([
            'user_id' => auth()->id(),
            'category_id' => $request->category_id,
            'source_id' => $request->source_id,
            'url' => $slug,
            'path' => $path,
            'pretitle' => $request->pretitle,
            'title' => $request->title,
            'subtitle' => $request->subtitle,
            'enter' => $request->enter,
            'body' => $request->body,
            'author' => $request->author,
            'publication_date' => $request->publication_date,
            'state' => $request->state,
        ]);

        // Handle Image Upload
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('news_images', 'public');
            $imageUrl = asset('storage/' . $imagePath);

            Multimedia::create([
                'news_id' => $news->id,
                'description' => $request->title,
                'url' => $imageUrl,
                'type' => 'image',
                'state' => 'A',
            ]);
        }

        return redirect()->route('admin.news.index')->with('success', 'Noticia creada exitosamente.');
    }

    public function edit(News $news)
    {
        $categories = Category::where('state', 'A')->orderBy('name')->get();
        $sources = Source::where('state', 'A')->orderBy('name')->get();
        return view('admin.news.edit', compact('news', 'categories', 'sources'));
    }

    public function update(Request $request, News $news)
    {
        $request->validate([
            'category_id' => 'required|exists:categories,id',
            'source_id' => 'required|exists:sources,id',
            'title' => 'required|string|max:255',
            'pretitle' => 'nullable|string|max:255',
            'subtitle' => 'nullable|string|max:500',
            'enter' => 'nullable|string|max:1000',
            'body' => 'required|string',
            'author' => 'nullable|string|max:255',
            'publication_date' => 'required|date',
            'state' => 'required|in:A,I',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
        ]);

        // Si se cambia de categoría, tenemos que actualizar el path basado en la nueva categoría.
        $category = Category::findOrFail($request->category_id);
        $slug = $news->url;
        
        // Si el título cambió sustancialmente, podríamos recrear el slug, pero por SEO 
        // normalmente mantenemos el slug original. Solo actualizaremos el path si la categoría cambia.
        $path = '/' . $category->url . '/' . $slug;

        $news->update([
            'category_id' => $request->category_id,
            'source_id' => $request->source_id,
            'path' => $path,
            'pretitle' => $request->pretitle,
            'title' => $request->title,
            'subtitle' => $request->subtitle,
            'enter' => $request->enter,
            'body' => $request->body,
            'author' => $request->author,
            'publication_date' => $request->publication_date,
            'state' => $request->state,
        ]);

        // Handle Image Update
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('news_images', 'public');
            $imageUrl = asset('storage/' . $imagePath);

            $multimedia = $news->multimedia()->where('type', 'image')->first();
            
            if ($multimedia) {
                // Technically we should delete the old physical file from storage to save space
                // Storage::disk('public')->delete(str_replace(asset('storage/'), '', $multimedia->url));
                $multimedia->update(['url' => $imageUrl]);
            } else {
                Multimedia::create([
                    'news_id' => $news->id,
                    'description' => $request->title,
                    'url' => $imageUrl,
                    'type' => 'image',
                    'state' => 'A',
                ]);
            }
        }

        return redirect()->route('admin.news.index')->with('success', 'Noticia actualizada exitosamente.');
    }

    public function destroy(News $news)
    {
        // Delete related multimedia physically (optional, skipping for simplicity)
        $news->multimedia()->delete();
        $news->delete();
        
        return redirect()->route('admin.news.index')->with('success', 'Noticia eliminada exitosamente.');
    }
}
