@extends('layouts.admin')

@section('title', 'Gestión de Noticias')

@section('content')
<div class="card">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h2 style="font-size: 20px; font-weight: 600;">Noticias Publicadas</h2>
        <a href="{{ route('admin.news.create') }}" class="btn btn-primary"><i class="fas fa-plus"></i> Redactar Noticia</a>
    </div>

    <div style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; text-align: left;">
            <thead>
                <tr style="border-bottom: 2px solid var(--border);">
                    <th style="padding: 12px; color: var(--text-muted); font-size: 14px; font-weight: 600;">Fecha</th>
                    <th style="padding: 12px; color: var(--text-muted); font-size: 14px; font-weight: 600;">Categoría</th>
                    <th style="padding: 12px; color: var(--text-muted); font-size: 14px; font-weight: 600; max-width: 300px;">Título</th>
                    <th style="padding: 12px; color: var(--text-muted); font-size: 14px; font-weight: 600;">Autor / Redactor</th>
                    <th style="padding: 12px; color: var(--text-muted); font-size: 14px; font-weight: 600;">Estado</th>
                    <th style="padding: 12px; color: var(--text-muted); font-size: 14px; font-weight: 600;">Acciones</th>
                </tr>
            </thead>
            <tbody>
                @foreach($news as $item)
                <tr style="border-bottom: 1px solid var(--border);">
                    <td style="padding: 12px; font-size: 14px; white-space: nowrap;">{{ \Carbon\Carbon::parse($item->publication_date)->format('d/m/Y H:i') }}</td>
                    <td style="padding: 12px; font-size: 14px;">
                        <span style="background: #f3f4f6; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 500;">{{ $item->category->name }}</span>
                    </td>
                    <td style="padding: 12px; font-size: 14px; font-weight: 500; max-width: 300px;">
                        <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="{{ $item->title }}">{{ $item->title }}</div>
                    </td>
                    <td style="padding: 12px; font-size: 14px;">{{ $item->author ?? 'Anónimo' }}</td>
                    <td style="padding: 12px; font-size: 14px;">
                        @if($item->state === 'A')
                            <span style="color: #059669;"><i class="fas fa-check-circle"></i> Publicada</span>
                        @else
                            <span style="color: #dc2626;"><i class="fas fa-times-circle"></i> Borrador</span>
                        @endif
                    </td>
                    <td style="padding: 12px;">
                        <div style="display: flex; gap: 8px;">
                            <a href="{{ url($item->path) }}" target="_blank" class="btn" style="background:#e5e7eb; color:#374151; padding: 6px 10px;" title="Ver en el sitio web"><i class="fas fa-external-link-alt"></i></a>
                            <a href="{{ route('admin.news.edit', $item) }}" class="btn btn-primary" style="padding: 6px 10px;"><i class="fas fa-edit"></i></a>
                            <form action="{{ route('admin.news.destroy', $item) }}" method="POST" onsubmit="return confirm('¿Estás seguro de eliminar esta noticia permanentemente?');" style="margin: 0;">
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
        {{ $news->links('pagination::bootstrap-5') }}
    </div>
</div>
@endsection
