@extends('layouts.app')

@section('title', $category->name . ' — Bolivian Daily')
@section('meta_description', 'Últimas noticias de ' . $category->name . ' en Bolivia. Bolivian Daily.')

@section('content')

{{-- Category header --}}
<div class="cat-page-header">
    <h1 class="cat-page-header__name">{{ $category->name }}</h1>
</div>

@if($news->count())

{{-- Hero of the category (first article) --}}
@if($featured)
<div class="cat-page-hero">
    <div>
        @php $featImg = $featured->mainImage(); @endphp
        @if($featImg)
        <a href="{{ route('news.show', [$featured->category->url, $featured->url]) }}">
            <img class="cat-page-hero__image" src="{{ $featImg }}" alt="{{ $featured->title }}" loading="eager">
        </a>
        @endif
    </div>
    <div style="display:flex;flex-direction:column;justify-content:flex-start;">
        @if($featured->pretitle)
        <div class="hero__pretitle">{{ $featured->pretitle }}</div>
        @endif
        <h2 class="hero__title">
            <a href="{{ route('news.show', [$featured->category->url, $featured->url]) }}">{{ $featured->title }}</a>
        </h2>
        @if($featured->subtitle)
        <p class="hero__subtitle">{{ $featured->subtitle }}</p>
        @endif
        @if($featured->enter)
        <p style="font-family:var(--font-body);font-size:16px;color:var(--gray-dark);line-height:1.6;margin-bottom:12px;">{{ $featured->enter }}</p>
        @endif
        <div class="hero__meta">
            @if($featured->author)
            <span class="hero__author">{{ $featured->author }}</span>
            @endif
            <span>{{ $featured->publication_date->locale('es')->diffForHumans() }}</span>
        </div>
    </div>
</div>
@endif

{{-- Section header for the grid --}}
<div class="section-header" style="margin-top:16px;">
    <span class="section-header__name">Todas las noticias de {{ $category->name }}</span>
</div>

{{-- News grid (skip the first one already shown as hero) --}}
<div class="cat-news-grid">
    @foreach($news->skip(1) as $item)
    @php $img = $item->mainImage(); @endphp
    <article class="news-card">
        @if($img)
        <a href="{{ route('news.show', [$item->category->url, $item->url]) }}">
            <img class="news-card__image" src="{{ $img }}" alt="{{ $item->title }}" loading="lazy">
        </a>
        @endif
        @if($item->pretitle)
        <div class="news-card__pretitle">{{ $item->pretitle }}</div>
        @endif
        <h2 class="news-card__title">
            <a href="{{ route('news.show', [$item->category->url, $item->url]) }}">{{ $item->title }}</a>
        </h2>
        @if($item->subtitle)
        <p class="news-card__subtitle">{{ Str::limit($item->subtitle, 100) }}</p>
        @endif
        <div class="news-card__meta">
            {{ $item->author }} &middot; {{ $item->publication_date->locale('es')->diffForHumans() }}
        </div>
    </article>
    @endforeach
</div>

{{-- Pagination --}}
@if($news->hasPages())
<div class="pagination-wrap">
    {{-- Previous --}}
    @if($news->onFirstPage())
        <span style="opacity:.4;">&lsaquo;</span>
    @else
        <a href="{{ $news->previousPageUrl() }}" aria-label="Anterior">&lsaquo;</a>
    @endif

    @foreach($news->getUrlRange(1, $news->lastPage()) as $page => $url)
        @if($page == $news->currentPage())
            <span class="active">{{ $page }}</span>
        @else
            <a href="{{ $url }}">{{ $page }}</a>
        @endif
    @endforeach

    {{-- Next --}}
    @if($news->hasMorePages())
        <a href="{{ $news->nextPageUrl() }}" aria-label="Siguiente">&rsaquo;</a>
    @else
        <span style="opacity:.4;">&rsaquo;</span>
    @endif
</div>
@endif

@else
<div style="text-align:center;padding:80px 0;font-family:var(--font-sans);color:var(--gray-light);">
    <p style="font-size:24px;margin-bottom:8px;">No hay noticias todavía</p>
    <p>Vuelve pronto para encontrar contenido en esta sección.</p>
</div>
@endif

@endsection
