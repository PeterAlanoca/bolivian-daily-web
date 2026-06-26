@extends('layouts.admin')

@section('title', 'Editar Categoría')

@section('content')
<div class="card" style="max-width: 600px; margin: 0 auto;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
        <h2 style="font-size: 20px; font-weight: 600;">Editar Categoría: {{ $category->name }}</h2>
        <a href="{{ route('admin.categories.index') }}" class="btn" style="background:#f3f4f6; color:#374151; border:1px solid #d1d5db;"><i class="fas fa-arrow-left"></i> Volver</a>
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

    <form action="{{ route('admin.categories.update', $category) }}" method="POST">
        @csrf
        @method('PUT')
        
        <div style="margin-bottom: 16px;">
            <label style="display: block; font-weight: 500; margin-bottom: 8px; font-size: 14px;" for="name">Nombre de Categoría</label>
            <input type="text" id="name" name="name" value="{{ old('name', $category->name) }}" required style="width: 100%; padding: 10px; border: 1px solid var(--border); border-radius: 4px; font-size: 14px;">
            <small style="color:var(--text-muted); display:block; margin-top:4px;">El alias actual es: <strong style="color:var(--text-main);">/{{ $category->url }}</strong>. Se actualizará si cambias el nombre.</small>
        </div>

        <div style="margin-bottom: 24px;">
            <label style="display: block; font-weight: 500; margin-bottom: 8px; font-size: 14px;" for="state">Estado</label>
            <select id="state" name="state" style="width: 100%; padding: 10px; border: 1px solid var(--border); border-radius: 4px; font-size: 14px; background: #fff;">
                <option value="A" {{ old('state', $category->state) == 'A' ? 'selected' : '' }}>Activa</option>
                <option value="I" {{ old('state', $category->state) == 'I' ? 'selected' : '' }}>Inactiva</option>
            </select>
        </div>

        <button type="submit" class="btn btn-primary" style="width: 100%; padding: 12px;"><i class="fas fa-save"></i> Actualizar Categoría</button>
    </form>
</div>
@endsection
