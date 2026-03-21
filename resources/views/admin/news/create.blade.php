@extends('layouts.admin')

@section('title', 'Redactar Noticia')

@section('content')
<link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.css" rel="stylesheet">

<div class="card" style="max-width: 1000px; margin: 0 auto;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
        <h2 style="font-size: 20px; font-weight: 600;">Redactar Nueva Noticia</h2>
        <a href="{{ route('admin.news.index') }}" class="btn" style="background:#f3f4f6; color:#374151; border:1px solid #d1d5db;"><i class="fas fa-arrow-left"></i> Volver</a>
    </div>

    @if ($errors->any())
        <div class="alert alert-danger">
            <ul style="margin-left: 20px;">
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <form action="{{ route('admin.news.store') }}" method="POST" enctype="multipart/form-data">
        @csrf
        
        <div style="display: flex; gap: 20px; margin-bottom: 16px;">
            <div style="flex: 1;">
                <label style="display: block; font-weight: 500; margin-bottom: 8px; font-size: 14px;" for="category_id">Categoría *</label>
                <select id="category_id" name="category_id" required style="width: 100%; padding: 10px; border: 1px solid var(--border); border-radius: 4px; font-size: 14px; background: #fff;">
                    <option value="">Selecciona Categoría...</option>
                    @foreach($categories as $cat)
                        <option value="{{ $cat->id }}" {{ old('category_id') == $cat->id ? 'selected' : '' }}>{{ $cat->name }}</option>
                    @endforeach
                </select>
            </div>
            <div style="flex: 1;">
                <label style="display: block; font-weight: 500; margin-bottom: 8px; font-size: 14px;" for="source_id">Fuente *</label>
                <select id="source_id" name="source_id" required style="width: 100%; padding: 10px; border: 1px solid var(--border); border-radius: 4px; font-size: 14px; background: #fff;">
                    <option value="">Selecciona Fuente...</option>
                    @foreach($sources as $src)
                        <option value="{{ $src->id }}" {{ old('source_id') == $src->id ? 'selected' : '' }}>{{ $src->name }}</option>
                    @endforeach
                </select>
            </div>
        </div>

        <div style="margin-bottom: 16px;">
            <label style="display: block; font-weight: 500; margin-bottom: 8px; font-size: 14px;" for="pretitle">Pretítulo (Opcional - Texto pequeño encima del título)</label>
            <input type="text" id="pretitle" name="pretitle" value="{{ old('pretitle') }}" style="width: 100%; padding: 10px; border: 1px solid var(--border); border-radius: 4px; font-size: 14px;">
        </div>

        <div style="margin-bottom: 16px;">
            <label style="display: block; font-weight: 500; margin-bottom: 8px; font-size: 14px;" for="title">Título Principal *</label>
            <input type="text" id="title" name="title" value="{{ old('title') }}" required style="width: 100%; padding: 14px; border: 1px solid var(--border); border-radius: 4px; font-size: 18px; font-family: 'Playfair Display', serif; font-weight: bold;">
        </div>

        <div style="margin-bottom: 16px;">
            <label style="display: block; font-weight: 500; margin-bottom: 8px; font-size: 14px;" for="subtitle">Subtítulo o Bajada (Opcional)</label>
            <textarea id="subtitle" name="subtitle" rows="2" style="width: 100%; padding: 10px; border: 1px solid var(--border); border-radius: 4px; font-size: 14px;">{{ old('subtitle') }}</textarea>
        </div>
        
        <div style="margin-bottom: 24px;">
            <label style="display: block; font-weight: 500; margin-bottom: 8px; font-size: 14px;" for="enter">Entradilla o Lead (Opcional - Primeros párrafos destacados)</label>
            <textarea id="enter" name="enter" rows="3" style="width: 100%; padding: 10px; border: 1px solid var(--border); border-radius: 4px; font-size: 14px;">{{ old('enter') }}</textarea>
        </div>

        <div style="margin-bottom: 24px;">
            <label style="display: block; font-weight: 500; margin-bottom: 8px; font-size: 14px;" for="body">Cuerpo de la Noticia *</label>
            <textarea id="body" name="body" required>{{ old('body') }}</textarea>
        </div>

        <div style="display: flex; gap: 20px; margin-bottom: 24px;">
            <div style="flex: 1;">
                <label style="display: block; font-weight: 500; margin-bottom: 8px; font-size: 14px;" for="author">Autor o Periodista (Opcional)</label>
                <input type="text" id="author" name="author" value="{{ old('author', auth()->user()->name) }}" style="width: 100%; padding: 10px; border: 1px solid var(--border); border-radius: 4px; font-size: 14px;">
            </div>
            <div style="flex: 1;">
                <label style="display: block; font-weight: 500; margin-bottom: 8px; font-size: 14px;" for="publication_date">Fecha de Publicación *</label>
                <input type="datetime-local" id="publication_date" name="publication_date" value="{{ old('publication_date', now()->format('Y-m-d\TH:i')) }}" required style="width: 100%; padding: 10px; border: 1px solid var(--border); border-radius: 4px; font-size: 14px;">
            </div>
        </div>

        <div style="display: flex; gap: 20px; margin-bottom: 32px; padding: 20px; background: #f9fafb; border: 1px dashed #d1d5db; border-radius: 8px;">
            <div style="flex: 1;">
                <label style="display: block; font-weight: 500; margin-bottom: 8px; font-size: 14px;" for="image">Imagen Principal (Portada) *</label>
                <input type="file" id="image" name="image" accept="image/*" required style="width: 100%; padding: 10px; border: 1px solid var(--border); border-radius: 4px; font-size: 14px; background: #fff;">
            </div>
            <div style="flex: 1;">
                <label style="display: block; font-weight: 500; margin-bottom: 8px; font-size: 14px;" for="state">Estado</label>
                <select id="state" name="state" style="width: 100%; padding: 10px; border: 1px solid var(--border); border-radius: 4px; font-size: 14px; background: #fff;">
                    <option value="A" {{ old('state', 'A') == 'A' ? 'selected' : '' }}>Publicado (Activo)</option>
                    <option value="I" {{ old('state') == 'I' ? 'selected' : '' }}>Borrador (Inactivo)</option>
                </select>
            </div>
        </div>

        <button type="submit" class="btn btn-primary" style="width: 100%; padding: 14px; font-size: 16px;"><i class="fas fa-paper-plane"></i> Publicar Noticia</button>
    </form>
</div>

<!-- Scripts for Summernote -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.js"></script>
<script>
    $(document).ready(function() {
        $('#body').summernote({
            placeholder: 'Escribe el desarrollo completo de la noticia aquí...',
            tabsize: 2,
            height: 400,
            toolbar: [
                ['style', ['style']],
                ['font', ['bold', 'underline', 'clear', 'italic']],
                ['color', ['color']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['table', ['table']],
                ['insert', ['link', 'video']],
                ['view', ['fullscreen', 'codeview', 'help']]
            ]
        });
    });
</script>
@endsection
