@extends('layouts.admin')

@section('title', 'Editar Usuario')

@section('content')
<div class="card" style="max-width: 600px; margin: 0 auto;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
        <h2 style="font-size: 20px; font-weight: 600;">Editar Usuario: {{ $user->name }}</h2>
        <a href="{{ route('admin.users.index') }}" class="btn" style="background:#f3f4f6; color:#374151; border:1px solid #d1d5db;"><i class="fas fa-arrow-left"></i> Volver</a>
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

    <form action="{{ route('admin.users.update', $user) }}" method="POST">
        @csrf
        @method('PUT')
        
        <div style="margin-bottom: 16px;">
            <label style="display: block; font-weight: 500; margin-bottom: 8px; font-size: 14px;" for="name">Nombre Completo</label>
            <input type="text" id="name" name="name" value="{{ old('name', $user->name) }}" required style="width: 100%; padding: 10px; border: 1px solid var(--border); border-radius: 4px; font-size: 14px;">
        </div>

        <div style="margin-bottom: 16px;">
            <label style="display: block; font-weight: 500; margin-bottom: 8px; font-size: 14px;" for="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" value="{{ old('email', $user->email) }}" required style="width: 100%; padding: 10px; border: 1px solid var(--border); border-radius: 4px; font-size: 14px;">
        </div>

        <div style="margin-bottom: 16px;">
            <label style="display: block; font-weight: 500; margin-bottom: 8px; font-size: 14px;" for="password">Contraseña <span style="font-weight:normal; color:var(--text-muted);">(Déjalo en blanco si no deseas cambiarla)</span></label>
            <input type="password" id="password" name="password" style="width: 100%; padding: 10px; border: 1px solid var(--border); border-radius: 4px; font-size: 14px;">
        </div>

        <div style="display: flex; gap: 20px; margin-bottom: 24px;">
            <div style="flex: 1;">
                <label style="display: block; font-weight: 500; margin-bottom: 8px; font-size: 14px;" for="access">Rol de Acceso</label>
                <select id="access" name="access" style="width: 100%; padding: 10px; border: 1px solid var(--border); border-radius: 4px; font-size: 14px; background: #fff;" {{ $user->id === 1 ? 'disabled' : '' }}>
                    <option value="admin" {{ old('access', $user->access) == 'admin' ? 'selected' : '' }}>Administrador (Total)</option>
                    <option value="editor" {{ old('access', $user->access) == 'editor' ? 'selected' : '' }}>Editor (Noticias)</option>
                    <option value="user" {{ old('access', $user->access) == 'user' ? 'selected' : '' }}>Usuario Lector</option>
                </select>
                @if($user->id === 1)
                <!-- Envía el valor para el super admin si está disabled -->
                <input type="hidden" name="access" value="admin">
                @endif
            </div>
            <div style="flex: 1;">
                <label style="display: block; font-weight: 500; margin-bottom: 8px; font-size: 14px;" for="state">Estado</label>
                <select id="state" name="state" style="width: 100%; padding: 10px; border: 1px solid var(--border); border-radius: 4px; font-size: 14px; background: #fff;" {{ $user->id === 1 ? 'disabled' : '' }}>
                    <option value="A" {{ old('state', $user->state) == 'A' ? 'selected' : '' }}>Activo</option>
                    <option value="I" {{ old('state', $user->state) == 'I' ? 'selected' : '' }}>Inactivo</option>
                </select>
                @if($user->id === 1)
                <!-- Envía el valor para el super admin si está disabled -->
                <input type="hidden" name="state" value="A">
                @endif
            </div>
        </div>

        <button type="submit" class="btn btn-primary" style="width: 100%; padding: 12px;"><i class="fas fa-save"></i> Actualizar Usuario</button>
    </form>
</div>
@endsection
