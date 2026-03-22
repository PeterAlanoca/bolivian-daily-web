<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\News;
use App\Models\Multimedia;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class NewsApiController extends Controller
{
    public function store(Request $request)
    {
        // 1. Validar Token de seguridad
        $token = $request->header('X-API-TOKEN');
        if ($token !== env('SCRAPER_API_TOKEN')) {
            return response()->json(['message' => 'No autorizado.'], 401);
        }

        // 2. Validar Datos
        $validator = Validator::make($request->all(), [
            'category_id' => 'required|exists:categories,id',
            'source_id'   => 'required|exists:sources,id',
            'user_id'     => 'required|exists:users,id',
            'title'       => 'required|string|max:255',
            'body'        => 'required|string',
            'url'         => 'nullable|string|max:255', // Permite enviar slug manual
            'pretitle'    => 'nullable|string|max:255',
            'subtitle'    => 'nullable|string|max:500',
            'enter'       => 'nullable|string|max:1000',
            'author'      => 'nullable|string|max:100',
            'publication_date' => 'required|date',
            'multimedia'    => 'nullable|array',
            'multimedia.*.url'  => 'required|url',
            'multimedia.*.type' => 'nullable|string|in:image,video',
            'multimedia.*.description' => 'nullable|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Error de validación.',
                'errors'  => $validator->errors()
            ], 422);
        }

        try {
            return DB::transaction(function () use ($request) {
                // 3. Generar URL (slug) si no viene o usar la enviada
                $url = $request->url ? Str::slug($request->url) : Str::slug($request->title);
                
                // Asegurar que sea único
                $originalUrl = $url;
                $count = 1;
                while (News::where('url', $url)->exists()) {
                    $url = $originalUrl . '-' . $count++;
                }

                $category = \App\Models\Category::findOrFail($request->category_id);
                $path = '/' . $category->url . '/' . $url;

                // 4. Crear la noticia (maneja nulos automáticamente por el fillable)
                $news = News::create([
                    'user_id'     => $request->user_id,
                    'category_id' => $request->category_id,
                    'source_id'   => $request->source_id,
                    'title'       => $request->title,
                    'pretitle'    => $request->pretitle,
                    'subtitle'    => $request->subtitle,
                    'enter'       => $request->enter,
                    'body'        => $request->body,
                    'author'      => $request->author,
                    'url'         => $url,
                    'path'        => $path,
                    'publication_date' => $request->publication_date,
                    'state'       => $request->state ?? 'A',
                ]);

                // 5. Procesar arreglos multimedia
                if ($request->has('multimedia')) {
                    foreach ($request->multimedia as $item) {
                        Multimedia::create([
                            'news_id'     => $news->id,
                            'url'         => $item['url'],
                            'type'        => $item['type'] ?? 'image',
                            'state'       => 'A',
                            'description' => $item['description'] ?? null
                        ]);
                    }
                }

                return response()->json([
                    'message' => 'Noticia creada con éxito.',
                    'data'    => $news->load('multimedia')
                ], 201);
            });
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error al procesar la noticia.',
                'error'   => $e->getMessage()
            ], 500);
        }
    }
}
