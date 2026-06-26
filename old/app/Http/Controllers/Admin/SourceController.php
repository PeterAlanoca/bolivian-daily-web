<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Source;
use Illuminate\Http\Request;

class SourceController extends Controller
{
    public function index()
    {
        $sources = Source::orderBy('id', 'asc')->paginate(15);
        return view('admin.sources.index', compact('sources'));
    }

    public function create()
    {
        return view('admin.sources.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255|unique:sources',
            'url' => 'nullable|url|max:255',
            'state' => 'required|in:A,I',
        ]);

        Source::create($request->all());

        return redirect()->route('admin.sources.index')->with('success', 'Fuente creada exitosamente.');
    }

    public function edit(Source $source)
    {
        return view('admin.sources.edit', compact('source'));
    }

    public function update(Request $request, Source $source)
    {
        $request->validate([
            'name' => 'required|string|max:255|unique:sources,name,'.$source->id,
            'url' => 'nullable|url|max:255',
            'state' => 'required|in:A,I',
        ]);

        $source->update($request->all());

        return redirect()->route('admin.sources.index')->with('success', 'Fuente actualizada exitosamente.');
    }

    public function destroy(Source $source)
    {
        if ($source->news()->count() > 0) {
            return redirect()->route('admin.sources.index')->with('error', 'No se puede eliminar porque existen noticias asociadas a esta fuente.');
        }

        $source->delete();
        return redirect()->route('admin.sources.index')->with('success', 'Fuente eliminada exitosamente.');
    }
}
