@extends('layouts.app')

@section('title', $news->title . ' — Bolivian Daily')
@section('meta_description', $news->subtitle ?? Str::limit(strip_tags($news->body), 155))

@section('content')

{{-- Breadcrumb --}}
    <div style="font-family:var(--font-sans);font-size:11px;color:var(--gray-light);letter-spacing:.05em;margin-bottom:24px;text-transform:uppercase;">
        <a href="{{ route('home') }}" style="color:var(--gray-mid);">&larr; Inicio</a>
        <span style="margin:0 8px;">/</span>
        <a href="{{ route('category.show', ['category' => $news->category->url]) }}" style="font-weight:700;color:var(--black);">{{ $news->category->name }}</a>
    </div>

<div class="content-sidebar" style="margin-top:0;">

    {{-- Main Article Content --}}
    <article class="main-article">
        
        <header class="article-header">
            <div class="article-pretitle">{{ $news->pretitle ?? '' }}</div>
            <h1 class="article-title">{{ $news->title }}</h1>
            @if($news->subtitle)
            <p class="article-subtitle">{{ $news->subtitle }}</p>
            @endif
            <div class="article-meta">
                <div class="article-meta__category">
                    <a href="{{ route('category.show', ['category' => $news->category->url]) }}">{{ $news->category->name }}</a>
                </div>
                <div class="article-meta__author">{{ $news->author ?? 'Bolivian Daily' }}</div>
                <div class="article-meta__date">{{ $news->publication_date ? \Carbon\Carbon::parse($news->publication_date)->locale('es')->isoFormat('D [de] MMMM [de] YYYY, HH:mm') : \Carbon\Carbon::parse($news->created_at)->locale('es')->isoFormat('D [de] MMMM [de] YYYY, HH:mm') }} &middot; Fuente: {{ $news->source->name ?? 'Bolivian Daily' }}</div>
            </div>
        </header>

        {{-- Hero image --}}
        @php $heroImg = $news->mainImage(); @endphp
        @if($heroImg)
        <div class="article-hero-image">
            <img src="{{ $heroImg }}" alt="{{ $news->title }}">
        </div>
        <p class="article-hero-caption">{{ $news->author ?? 'Bolivian Daily' }} / {{ $news->source->name ?? 'Bolivian Daily' }}</p>
        @endif

        {{-- Enter (intro paragraph) --}}
        @if($news->enter)
        <p style="font-family:var(--font-body);font-size:20px;font-weight:600;line-height:1.6;color:var(--black);margin-bottom:24px;max-width:740px;">
            {{ $news->enter }}
        </p>
        @endif

        {{-- Body --}}
        <div class="article-body">
            {!! $news->body !!}
        </div>

        {{-- Additional multimedia --}}
        @php $moreImages = $news->multimedia->filter(fn($m) => str_contains($m->type, 'image') && $m->state == 'A')->skip(1); @endphp
        @if($moreImages->count())
        <div style="margin-top:32px;">
            <div class="section-header"><span class="section-header__name">Galería</span></div>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px;">
                @foreach($moreImages as $m)
                <figure>
                    <img src="{{ $m->url }}" alt="{{ $m->description ?? $news->title }}" style="width:100%;aspect-ratio:4/3;object-fit:cover;">
                    @if($m->description)
                    <figcaption style="font-size:11px;color:var(--gray-mid);margin-top:4px;font-style:italic;">{{ $m->description }}</figcaption>
                    @endif
                </figure>
                @endforeach
            </div>
        </div>
        @endif
    </article>

    {{-- SIDEBAR: related news --}}
    <aside class="sidebar">
        @if($related->count())
        <div class="sidebar__block">
                <div class="sidebar__title">Más de {{ $news->category->name }}</div>
                <ul class="most-read__list">
                    @foreach($related as $rel)
                    <li class="most-read__item" style="display:block;">
                        @if($rel->mainImage())
                        <img src="{{ $rel->mainImage() }}" alt="{{ $rel->title }}" style="width:100%; aspect-ratio:16/9; object-fit:cover; margin-bottom:10px;">
                        @endif
                        <h4 class="most-read__title" style="font-size:16px;">
                            <a href="{{ route('news.show', ['category' => $rel->category->url, 'url' => $rel->url]) }}">{{ $rel->title }}</a>
                        </h4>
                        <div class="most-read__meta" style="margin-top:8px;">
                            {{ $rel->publication_date ? \Carbon\Carbon::parse($rel->publication_date)->diffForHumans() : '' }}
                        </div>
                    </li>
                    @endforeach
                </ul>
        </div>
        @endif


    </aside>

</div>

@endsection
