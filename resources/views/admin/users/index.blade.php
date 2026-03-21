@extends('layouts.admin')

@section('title', 'Gestión de Usuarios')

@section('content')
<div class="card">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h2 style="font-size: 20px; font-weight: 600;">Usuarios</h2>
        <a href="{{ route('admin.users.create') }}" class="btn btn-primary"><i class="fas fa-plus"></i> Nuevo Usuario</a>
    </div>

    <div style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; text-align: left;">
            <thead>
                <tr style="border-bottom: 2px solid var(--border);">
                    <th style="padding: 12px; color: var(--text-muted); font-size: 14px; font-weight: 600;">ID</th>
                    <th style="padding: 12px; color: var(--text-muted); font-size: 14px; font-weight: 600;">Nombre</th>
                    <th style="padding: 12px; color: var(--text-muted); font-size: 14px; font-weight: 600;">Email</th>
                    <th style="padding: 12px; color: var(--text-muted); font-size: 14px; font-weight: 600;">Rol</th>
                    <th style="padding: 12px; color: var(--text-muted); font-size: 14px; font-weight: 600;">Estado</th>
                    <th style="padding: 12px; color: var(--text-muted); font-size: 14px; font-weight: 600;">Acciones</th>
                </tr>
            </thead>
            <tbody>
                @foreach($users as $user)
                <tr style="border-bottom: 1px solid var(--border);">
                    <td style="padding: 12px; font-size: 14px;">{{ $user->id }}</td>
                    <td style="padding: 12px; font-size: 14px;">{{ $user->name }}</td>
                    <td style="padding: 12px; font-size: 14px;">{{ $user->email }}</td>
                    <td style="padding: 12px; font-size: 14px;">
                        @if($user->access === 'admin')
                            <span style="background: #fee2e2; color: #991b1b; padding: 4px 8px; border-radius: 999px; font-size: 12px; font-weight: 500;">Admin</span>
                        @elseif($user->access === 'editor')
                            <span style="background: #e0e7ff; color: #3730a3; padding: 4px 8px; border-radius: 999px; font-size: 12px; font-weight: 500;">Editor</span>
                        @else
                            <span style="background: #f3f4f6; color: #4b5563; padding: 4px 8px; border-radius: 999px; font-size: 12px; font-weight: 500;">Usuario</span>
                        @endif
                    </td>
                    <td style="padding: 12px; font-size: 14px;">
                        @if($user->state === 'A')
                            <span style="color: #059669;"><i class="fas fa-check-circle"></i> Activo</span>
                        @else
                            <span style="color: #dc2626;"><i class="fas fa-times-circle"></i> Inactivo</span>
                        @endif
                    </td>
                    <td style="padding: 12px;">
                        <div style="display: flex; gap: 8px;">
                            <a href="{{ route('admin.users.edit', $user) }}" class="btn btn-primary" style="padding: 6px 10px;"><i class="fas fa-edit"></i></a>
                            
                            @if($user->id !== 1 && $user->id !== auth()->id())
                            <form action="{{ route('admin.users.destroy', $user) }}" method="POST" onsubmit="return confirm('¿Estás seguro de eliminar este usuario?');" style="margin: 0;">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn btn-danger" style="padding: 6px 10px;"><i class="fas fa-trash"></i></button>
                            </form>
                            @endif
                        </div>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
    
    <div style="margin-top: 20px;">
        {{ $users->links('pagination::bootstrap-5') }}
    </div>
</div>
@endsection
