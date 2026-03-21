@extends('layouts.admin')

@section('title', 'Dashboard')

@section('content')
<h1 class="page-title">Bienvenido, {{ auth()->user()->name }}</h1>

<style>
    .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
    }
    .stat-card {
        background: #fff;
        border: 1px solid var(--border);
        border-radius: 8px;
        padding: 24px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        border-top: 4px solid var(--red);
    }
    .stat-card h3 {
        font-size: 14px;
        color: var(--text-muted);
        text-transform: uppercase;
        margin-bottom: 8px;
    }
    .stat-number {
        font-size: 32px;
        font-weight: bold;
        color: var(--text-main);
    }
</style>

<div class="stats-grid">
    <div class="stat-card">
        <h3>Noticias</h3>
        <div class="stat-number">{{ number_format($stats['news_count']) }}</div>
    </div>
    <div class="stat-card">
        <h3>Categorías</h3>
        <div class="stat-number">{{ number_format($stats['categories_count']) }}</div>
    </div>
    <div class="stat-card">
        <h3>Usuarios</h3>
        <div class="stat-number">{{ number_format($stats['users_count']) }}</div>
    </div>
</div>
@endsection
