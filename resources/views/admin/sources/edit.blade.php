@extends('layouts.admin')

@section('title', 'Editar Fuente')

@section('content')
<div class="card" style="max-width: 600px; margin: 0 auto;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
        <h2 style="font-size: 20px; font-weight: 600;">Editar Fuente: {{ $source->name }}</h2>
        <a href="{{ route('admin.sources.index') }}" class="btn" style="background:#f3f4f6; color:#374151; border:1px solid #d1d5db;"><i class="fas fa-arrow-left"></i> Volver</a>
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

    <form action="{{ route('admin.sources.update', $source) }}" method="POST">
        @csrf
        @method('PUT')
        
        <div style="margin-bottom: 16px;">
            <label style="display: block; font-weight: 500; margin-bottom: 8px; font-size: 14px;" for="name">Nombre de la Fuente</label>
            <input type="text" id="name" name="name" value="{{ old('name', $source->name) }}" required style="width: 100%; padding: 10px; border: 1px solid var(--border); border-radius: 4px; font-size: 14px;">
        </div>

        <div style="margin-bottom: 16px;">
            <label style="display: block; font-weight: 500; margin-bottom: 8px; font-size: 14px;" for="url">Página Web (URL opcional)</label>
            <input type="url" id="url" name="url" value="{{ old('url', $source->url) }}" placeholder="https://..." style="width: 100%; padding: 10px; border: 1px solid var(--border); border-radius: 4px; font-size: 14px;">
        </div>

        <div style="margin-bottom: 24px;">
            <label style="display: block; font-weight: 500; margin-bottom: 8px; font-size: 14px;" for="state">Estado</label>
            <select id="state" name="state" style="width: 100%; padding: 10px; border: 1px solid var(--border); border-radius: 4px; font-size: 14px; background: #fff;">
                <option value="A" {{ old('state', $source->state) == 'A' ? 'selected' : '' }}>Activa</option>
                <option value="I" {{ old('state', $source->state) == 'I' ? 'selected' : '' }}>Inactiva</option>
            </select>
        </div>

        <button type="submit" class="btn btn-primary" style="width: 100%; padding: 12px;"><i class="fas fa-save"></i> Actualizar Fuente</button>
    </form>
</div>
@endsection
