<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Panel Admin') | Bolivian Daily</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        :root {
            --bg: #f4f6f9;
            --sidebar-bg: #111827;
            --sidebar-hover: #1f2937;
            --sidebar-text: #9ca3af;
            --sidebar-text-active: #ffffff;
            --border: #e5e7eb;
            --text-main: #111827;
            --text-muted: #6b7280;
            --red: #cc0000;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: var(--bg);
            color: var(--text-main);
            display: flex;
            min-height: 100vh;
        }
        
        /* Sidebar */
        .admin-sidebar {
            width: 260px;
            background-color: var(--sidebar-bg);
            color: var(--sidebar-text);
            display: flex;
            flex-direction: column;
            flex-shrink: 0;
            position: fixed;
            top: 0; bottom: 0; left: 0;
        }
        .sidebar-brand {
            height: 60px;
            display: flex;
            align-items: center;
            padding: 0 20px;
            font-family: 'Playfair Display', serif;
            font-size: 20px;
            font-weight: bold;
            color: #fff;
            border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .sidebar-nav {
            list-style: none;
            padding: 16px 0;
            flex-grow: 1;
            overflow-y: auto;
        }
        .sidebar-nav li a {
            display: flex;
            align-items: center;
            padding: 12px 20px;
            color: var(--sidebar-text);
            text-decoration: none;
            font-size: 15px;
            transition: background 0.2s, color 0.2s;
        }
        .sidebar-nav li a:hover, .sidebar-nav li a.active {
            background-color: var(--sidebar-hover);
            color: var(--sidebar-text-active);
        }
        .sidebar-nav li a i {
            width: 24px;
            font-size: 16px;
            margin-right: 8px;
            text-align: center;
        }

        /* Main Content */
        .admin-main {
            flex-grow: 1;
            margin-left: 260px;
            display: flex;
            flex-direction: column;
        }
        .admin-header {
            height: 60px;
            background-color: #fff;
            border-bottom: 1px solid var(--border);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 24px;
            position: sticky;
            top: 0;
            z-index: 10;
        }
        .header-user {
            display: flex;
            align-items: center;
            gap: 16px;
            font-size: 14px;
            font-weight: 500;
        }
        .btn-logout {
            background: none;
            border: none;
            color: var(--text-muted);
            cursor: pointer;
            font-size: 14px;
            transition: color 0.2s;
        }
        .btn-logout:hover {
            color: var(--red);
        }

        .admin-content {
            padding: 24px;
            flex-grow: 1;
        }
        .page-title {
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 24px;
        }

        /* Alerts */
        .alert {
            padding: 12px 16px;
            border-radius: 6px;
            margin-bottom: 20px;
            font-size: 14px;
        }
        .alert-success {
            background-color: #d1fae5;
            color: #065f46;
            border: 1px solid #34d399;
        }
        .alert-danger {
            background-color: #fee2e2;
            color: #991b1b;
            border: 1px solid #f87171;
        }

        /* Cards & Tables (General utilities) */
        .card {
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            padding: 24px;
            margin-bottom: 24px;
            border: 1px solid var(--border);
        }
        .btn {
            display: inline-block;
            padding: 8px 16px;
            border-radius: 4px;
            font-size: 14px;
            font-weight: 500;
            text-decoration: none;
            cursor: pointer;
            border: 1px solid transparent;
        }
        .btn-primary {
            background-color: var(--sidebar-bg);
            color: #fff;
        }
        .btn-primary:hover { background-color: var(--sidebar-hover); }
        .btn-danger {
            background-color: var(--red);
            color: #fff;
        }
        .btn-danger:hover { opacity: 0.9; }

        /* Bootstrap 5 Custom Pagination */
        nav > div:first-child { display: none !important; }
        nav > div:nth-child(2) > div:first-child { display: none !important; }
        nav > div:nth-child(2) { display: flex; justify-content: center; width: 100%; }
        
        .pagination {
            display: flex;
            padding-left: 0;
            list-style: none;
            justify-content: center;
            margin: 32px 0;
            gap: 4px;
        }
        .page-item .page-link {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            background-color: #fff;
            border: 1px solid var(--border);
            padding: 8px 14px;
            font-size: 14px;
            border-radius: 4px;
            color: var(--text-main);
            transition: 0.15s;
        }
        .page-item .page-link:hover {
            z-index: 2;
            background-color: var(--sidebar-hover);
            color: #fff;
            border-color: var(--sidebar-hover);
        }
        .page-item.active .page-link {
            z-index: 3;
            color: #fff;
            background-color: var(--sidebar-bg);
            border-color: var(--sidebar-bg);
        }
        .page-item.disabled .page-link {
            color: var(--text-muted);
            pointer-events: none;
            background-color: #f9fafb;
            border-color: var(--border);
        }
        .page-link svg {
            width: 16px;
            height: 16px;
        }

    </style>
</head>
<body>

    <aside class="admin-sidebar">
        <div class="sidebar-brand">Bolivian Daily</div>
        <ul class="sidebar-nav">
            <li><a href="{{ route('admin.dashboard') }}" class="{{ request()->routeIs('admin.dashboard') ? 'active' : '' }}"><i class="fas fa-home"></i> Dashboard</a></li>
            <li><a href="{{ route('admin.news.index') }}" class="{{ request()->routeIs('admin.news.*') ? 'active' : '' }}"><i class="fas fa-newspaper"></i> Noticias</a></li>
            <li><a href="{{ route('admin.categories.index') }}" class="{{ request()->routeIs('admin.categories.*') ? 'active' : '' }}"><i class="fas fa-tags"></i> Categorías</a></li>
            <li><a href="{{ route('admin.sources.index') }}" class="{{ request()->routeIs('admin.sources.*') ? 'active' : '' }}"><i class="fas fa-broadcast-tower"></i> Fuentes</a></li>
            @if(auth()->user()->access === 'admin')
            <li><a href="{{ route('admin.users.index') }}" class="{{ request()->routeIs('admin.users.*') ? 'active' : '' }}"><i class="fas fa-users"></i> Usuarios</a></li>
            @endif
        </ul>
    </aside>

    <div class="admin-main">
        <header class="admin-header">
            <div>
                <!-- Opcional: Toggle sidebar button -->
            </div>
            <div class="header-user">
                <span>{{ auth()->user()->name }} ({{ ucfirst(auth()->user()->access) }})</span>
                <form action="{{ route('admin.logout') }}" method="POST" style="margin: 0;">
                    @csrf
                    <button type="submit" class="btn-logout"><i class="fas fa-sign-out-alt"></i> Salir</button>
                </form>
            </div>
        </header>

        <main class="admin-content">
            @if(session('success'))
                <div class="alert alert-success">{{ session('success') }}</div>
            @endif
            @if(session('error'))
                <div class="alert alert-danger">{{ session('error') }}</div>
            @endif

            @yield('content')
        </main>
    </div>

</body>
</html>
