@extends('layouts.admin')

@section('title', 'Gestión de Categorías')

@section('content')
<div class="card">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h2 style="font-size: 20px; font-weight: 600;">Categorías</h2>
        <a href="{{ route('admin.categories.create') }}" class="btn btn-primary"><i class="fas fa-plus"></i> Nueva Categoría</a>
    </div>

    <div style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; text-align: left;">
            <thead>
                <tr style="border-bottom: 2px solid var(--border);">
                    <th style="padding: 12px; color: var(--text-muted); font-size: 14px; font-weight: 600;">ID</th>
                    <th style="padding: 12px; color: var(--text-muted); font-size: 14px; font-weight: 600;">Nombre</th>
                    <th style="padding: 12px; color: var(--text-muted); font-size: 14px; font-weight: 600;">Slug (URL)</th>
                    <th style="padding: 12px; color: var(--text-muted); font-size: 14px; font-weight: 600;">Estado</th>
                    <th style="padding: 12px; color: var(--text-muted); font-size: 14px; font-weight: 600;">Acciones</th>
                </tr>
            </thead>
            <tbody>
                @foreach($categories as $category)
                <tr style="border-bottom: 1px solid var(--border);">
                    <td style="padding: 12px; font-size: 14px;">{{ $category->id }}</td>
                    <td style="padding: 12px; font-size: 14px; font-weight: 500;">{{ $category->name }}</td>
                    <td style="padding: 12px; font-size: 14px; color: var(--text-muted);">/{{ $category->url }}</td>
                    <td style="padding: 12px; font-size: 14px;">
                        @if($category->state === 'A')
                            <span style="color: #059669;"><i class="fas fa-check-circle"></i> Activa</span>
                        @else
                            <span style="color: #dc2626;"><i class="fas fa-times-circle"></i> Inactiva</span>
                        @endif
                    </td>
                    <td style="padding: 12px;">
                        <div style="display: flex; gap: 8px;">
                            <a href="{{ route('admin.categories.edit', $category) }}" class="btn btn-primary" style="padding: 6px 10px;"><i class="fas fa-edit"></i></a>
                            
                            <form action="{{ route('admin.categories.destroy', $category) }}" method="POST" onsubmit="return confirm('¿Estás seguro de eliminar esta categoría? Si contiene noticias no se podrá borrar.');" style="margin: 0;">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn btn-danger" style="padding: 6px 10px;"><i class="fas fa-trash"></i></button>
                            </form>
                        </div>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
    
    <div style="margin-top: 20px;">
        {{ $categories->links('pagination::bootstrap-5') }}
    </div>
</div>
@endsection
