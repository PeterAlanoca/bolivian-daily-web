@extends('layouts.app')

@section('title', 'Bolivian Daily — Las noticias más importantes de Bolivia')
@section('meta_description', 'Bolivian Daily, el periódico digital de referencia en Bolivia. Política, economía, deportes, cultura y más.')

@section('content')

{{-- ===================== HERO ===================== --}}
@if($hero)
<section aria-label="Noticia principal">
    <div class="hero">
        <div class="hero__text">
            @if($hero->pretitle)
            <div class="hero__pretitle">{{ $hero->pretitle }}</div>
            @endif
            <h1 class="hero__title">
                <a href="{{ route('news.show', ['category' => $hero->category->url, 'url' => $hero->url]) }}">{{ $hero->title }}</a>
            </h1>
            @if($hero->subtitle)
            <p class="hero__subtitle">{{ $hero->subtitle }}</p>
            @endif
            <div class="hero__meta">
                @if($hero->author)
                <span class="hero__author">{{ $hero->author }}</span>
                @endif
                <span>{{ $hero->publication_date->locale('es')->diffForHumans() }}</span>
                @if($hero->category)
                <a href="{{ route('category.show', $hero->category->url) }}" style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--red);">{{ $hero->category->name }}</a>
                @endif
            </div>
        </div>
        <div class="hero__image-wrap">
            @php $heroImg = $hero->mainImage(); @endphp
            @if($heroImg)
            <a href="{{ route('news.show', ['category' => $hero->category->url, 'url' => $hero->url]) }}">
                <img class="hero__image" src="{{ $heroImg }}" alt="{{ $hero->title }}" loading="eager">
            </a>
            <p class="hero__image-caption">{{ $hero->author }} / Bolivian Daily</p>
            @endif
        </div>
    </div>
</section>
@endif

{{-- ===================== FEATURED 3-GRID ===================== --}}
@if($featured->count())
<section aria-label="Noticias destacadas">
    <div class="featured-grid">
        @foreach($featured as $item)
        @php $img = $item->mainImage(); @endphp
        <article class="featured-card">
            @if($img)
            <a href="{{ route('news.show', ['category' => $item->category->url, 'url' => $item->url]) }}">
                <img class="featured-card__image" src="{{ $img }}" alt="{{ $item->title }}" loading="lazy">
            </a>
            @endif
            @if($item->category)
            <div class="featured-card__cat">{{ $item->category->name }}</div>
            @endif
            <h2 class="featured-card__title">
                <a href="{{ route('news.show', ['category' => $item->category->url, 'url' => $item->url]) }}">{{ $item->title }}</a>
            </h2>
            @if($item->subtitle)
            <p class="featured-card__subtitle">{{ Str::limit($item->subtitle, 100) }}</p>
            @endif
            <div class="featured-card__meta">
                {{ $item->author }} &middot; {{ $item->publication_date->locale('es')->diffForHumans() }}
            </div>
        </article>
        @endforeach
    </div>
</section>
@endif

{{-- ===================== CONTENT + SIDEBAR ===================== --}}
<div class="content-sidebar">

    {{-- LEFT: Category blocks --}}
    <div>
        @foreach($categories as $category)
        @php
            $catNews = $category->news;
            $mainNews = $catNews->first();
            $sideNews = $catNews->slice(1, 4);
        @endphp

        <section class="category-block" aria-label="Sección {{ $category->name }}">
            <div class="section-header">
                <span class="section-header__name">{{ $category->name }}</span>
                <a class="section-header__link" href="{{ route('category.show', $category->url) }}">Ver todo &rsaquo;</a>
            </div>

            <div class="category-block__inner">
                {{-- Main story with image --}}
                @if($mainNews)
                <article class="category-main">
                    @php $mainImg = $mainNews->mainImage(); @endphp
                    @if($mainImg)
                    <a href="{{ route('news.show', ['category' => $mainNews->category->url, 'url' => $mainNews->url]) }}">
                        <img class="category-main__image" src="{{ $mainImg }}" alt="{{ $mainNews->title }}" loading="lazy">
                    </a>
                    @endif
                    @if($mainNews->pretitle)
                    <div class="category-main__pretitle">{{ $mainNews->pretitle }}</div>
                    @endif
                    <h2 class="category-main__title">
                        <a href="{{ route('news.show', ['category' => $mainNews->category->url, 'url' => $mainNews->url]) }}">{{ $mainNews->title }}</a>
                    </h2>
                    @if($mainNews->subtitle)
                    <p class="category-main__subtitle">{{ Str::limit($mainNews->subtitle, 120) }}</p>
                    @endif
                    <div class="category-main__meta">
                        {{ $mainNews->author }} &middot; {{ $mainNews->publication_date->locale('es')->diffForHumans() }}
                    </div>
                </article>
                @endif

                {{-- Side list: headlines only --}}
                @if($sideNews->count())
                <div class="category-list">
                    @foreach($sideNews as $side)
                    <article class="category-list__item">
                        @if($side->pretitle)
                        <div class="category-list__pretitle">{{ $side->pretitle }}</div>
                        @endif
                        <h3 class="category-list__title">
                            <a href="{{ route('news.show', ['category' => $side->category->url, 'url' => $side->url]) }}">{{ $side->title }}</a>
                        </h3>
                        <div class="category-list__meta">
                            {{ $side->author }} &middot; {{ $side->publication_date->locale('es')->diffForHumans() }}
                        </div>
                    </article>
                    @endforeach
                </div>
                @endif
            </div>
        </section>
        @endforeach
    </div>

    {{-- RIGHT: Sidebar --}}
    <aside class="sidebar">
        {{-- Most Read --}}
        <div class="sidebar__block">
            <div class="sidebar__title">Más leídas</div>
            <ul class="most-read__list">
                @foreach($mostRead as $i => $mr)
                <li class="most-read__item">
                    <span class="most-read__num">{{ $i + 1 }}</span>
                    <div class="most-read__text">
                        <div class="most-read__title">
                            <a href="{{ route('news.show', ['category' => $mr->category->url, 'url' => $mr->url]) }}">{{ $mr->title }}</a>
                        </div>
                        <div class="most-read__meta">
                            {{ $mr->publication_date->locale('es')->diffForHumans() }}
                        </div>
                    </div>
                </li>
                @endforeach
            </ul>
        </div>


    </aside>

</div>
@endsection
