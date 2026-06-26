@extends('layouts.admin')

@section('title', 'Nuevo Usuario')

@section('content')
<div class="card" style="max-width: 600px; margin: 0 auto;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
        <h2 style="font-size: 20px; font-weight: 600;">Crear Nuevo Usuario</h2>
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

    <form action="{{ route('admin.users.store') }}" method="POST">
        @csrf
        
        <div style="margin-bottom: 16px;">
            <label style="display: block; font-weight: 500; margin-bottom: 8px; font-size: 14px;" for="name">Nombre Completo</label>
            <input type="text" id="name" name="name" value="{{ old('name') }}" required style="width: 100%; padding: 10px; border: 1px solid var(--border); border-radius: 4px; font-size: 14px;">
        </div>

        <div style="margin-bottom: 16px;">
            <label style="display: block; font-weight: 500; margin-bottom: 8px; font-size: 14px;" for="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" value="{{ old('email') }}" required style="width: 100%; padding: 10px; border: 1px solid var(--border); border-radius: 4px; font-size: 14px;">
        </div>

        <div style="margin-bottom: 16px;">
            <label style="display: block; font-weight: 500; margin-bottom: 8px; font-size: 14px;" for="password">Contraseña</label>
            <input type="password" id="password" name="password" required style="width: 100%; padding: 10px; border: 1px solid var(--border); border-radius: 4px; font-size: 14px;">
        </div>

        <div style="display: flex; gap: 20px; margin-bottom: 24px;">
            <div style="flex: 1;">
                <label style="display: block; font-weight: 500; margin-bottom: 8px; font-size: 14px;" for="access">Rol de Acceso</label>
                <select id="access" name="access" style="width: 100%; padding: 10px; border: 1px solid var(--border); border-radius: 4px; font-size: 14px; background: #fff;">
                    <option value="admin" {{ old('access') == 'admin' ? 'selected' : '' }}>Administrador (Total)</option>
                    <option value="editor" {{ old('access', 'editor') == 'editor' ? 'selected' : '' }}>Editor (Noticias)</option>
                    <option value="user" {{ old('access') == 'user' ? 'selected' : '' }}>Usuario Lector</option>
                </select>
            </div>
            <div style="flex: 1;">
                <label style="display: block; font-weight: 500; margin-bottom: 8px; font-size: 14px;" for="state">Estado</label>
                <select id="state" name="state" style="width: 100%; padding: 10px; border: 1px solid var(--border); border-radius: 4px; font-size: 14px; background: #fff;">
                    <option value="A" {{ old('state', 'A') == 'A' ? 'selected' : '' }}>Activo</option>
                    <option value="I" {{ old('state') == 'I' ? 'selected' : '' }}>Inactivo</option>
                </select>
            </div>
        </div>

        <button type="submit" class="btn btn-primary" style="width: 100%; padding: 12px;"><i class="fas fa-save"></i> Guardar Usuario</button>
    </form>
</div>
@endsection
