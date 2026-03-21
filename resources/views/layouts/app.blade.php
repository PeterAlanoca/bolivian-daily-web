<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="@yield('meta_description', 'Bolivian Daily — Las noticias más importantes de Bolivia y el mundo.')">
    <title>@yield('title', 'Bolivian Daily')</title>

    <!-- Google Fonts: Playfair Display + Source Serif 4 + Inter -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=Source+Serif+4:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <style>
        /* ============================================================
           BOLIVIAN DAILY — Design System (Washington Post inspired)
        ============================================================ */

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
            --black:        #0d0d0d;
            --black-soft:   #1a1a1a;
            --gray-dark:    #333333;
            --gray-mid:     #555555;
            --gray-light:   #767676;
            --gray-border:  #cccccc;
            --gray-bg:      #f7f7f7;
            --gray-bg2:     #eeeeee;
            --white:        #ffffff;
            --red:          #444444;
            --blue-accent:  #005cff;
            --font-serif:   'Playfair Display', Georgia, serif;
            --font-body:    'Source Serif 4', Georgia, serif;
            --font-sans:    'Inter', Arial, sans-serif;
        }

        html { font-size: 16px; scroll-behavior: smooth; }
        body {
            font-family: var(--font-sans);
            color: var(--black);
            background: var(--white);
            line-height: 1.5;
        }

        a { color: inherit; text-decoration: none; }
        a:hover { text-decoration: underline; }
        img { display: block; max-width: 100%; height: auto; }

        /* ---- UTILITY ---- */
        .container { max-width: 1280px; margin: 0 auto; padding: 0 20px; }
        .sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0,0,0,0); }

        /* ============================================================
           TOP BAR
        ============================================================ */
        .top-bar {
            background: var(--white);
            border-bottom: 1px solid var(--gray-border);
            padding: 5px 0;
            font-family: var(--font-sans);
            font-size: 11px;
            color: var(--gray-mid);
            letter-spacing: 0.03em;
        }
        .top-bar__inner {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .top-bar__date { font-size: 11px; }
        .top-bar__right { display: flex; gap: 16px; align-items: center; }
        .top-bar__link { font-size: 11px; color: var(--gray-mid); }
        .top-bar__subscribe {
            background: var(--blue-accent);
            color: var(--white);
            font-size: 11px;
            font-weight: 600;
            padding: 4px 10px;
            border-radius: 2px;
            letter-spacing: 0.04em;
            transition: background 0.2s;
        }
        .top-bar__subscribe:hover { background: #0046cc; text-decoration: none; }

        /* ============================================================
           HEADER / MASTHEAD
        ============================================================ */
        .masthead {
            border-bottom: 3px solid var(--black);
            padding: 16px 0 0;
            background: var(--white);
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
        .masthead__top {
            display: flex;
            align-items: center;
            justify-content: center;
            padding-bottom: 14px;
        }
        .masthead__logo {
            text-align: center;
        }
        .masthead__logo a {
            display: inline-block;
        }
        .masthead__logo-text {
            font-family: 'Playfair Display', Georgia, serif;
            font-size: clamp(28px, 4vw, 44px);
            font-weight: 800;
            color: var(--black);
            letter-spacing: -0.5px;
            line-height: 1;
        }
        .masthead__logo-motto {
            font-family: var(--font-sans);
            font-size: 10px;
            letter-spacing: 0.12em;
            color: var(--gray-mid);
            text-transform: uppercase;
            margin-top: 2px;
            text-align: center;
        }
        .masthead__actions {
            display: flex;
            gap: 12px;
            align-items: center;
            min-width: 160px;
            justify-content: flex-end;
        }
        .masthead__search-btn {
            background: none;
            border: none;
            cursor: pointer;
            font-size: 18px;
            color: var(--black);
            padding: 4px;
        }
        .masthead__hamburger {
            background: none;
            border: none;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            gap: 4px;
            padding: 4px;
        }
        .masthead__hamburger span {
            display: block;
            width: 22px;
            height: 2px;
            background: var(--black);
        }

        /* ============================================================
           NAVIGATION
        ============================================================ */
        .main-nav {
            border-top: 1px solid var(--gray-border);
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
        }
        .main-nav::-webkit-scrollbar { display: none; }
        .main-nav__list {
            display: flex;
            list-style: none;
            gap: 0;
            white-space: nowrap;
            justify-content: center;
        }
        .main-nav__item a {
            display: block;
            padding: 10px 14px;
            font-family: var(--font-sans);
            font-size: 13px;
            font-weight: 500;
            color: var(--black);
            letter-spacing: 0.02em;
            text-transform: uppercase;
            border-bottom: 3px solid transparent;
            transition: border-color 0.15s, color 0.15s;
        }
        .main-nav__item a:hover,
        .main-nav__item a.active {
            border-bottom-color: var(--black);
            text-decoration: none;
            color: var(--black);
        }
        .main-nav__item--home a {
            border-bottom-color: transparent;
        }

        /* ============================================================
           BREAKING TICKER
        ============================================================ */
        .breaking-ticker {
            background-color: #0d0d0d;
            color: #ffffff;
            padding: 8px 0;
            overflow: hidden;
            display: flex;
            align-items: center;
            opacity: 1;
            position: relative;
            z-index: 99;
        }
        .breaking-ticker__label {
            position: relative;
            z-index: 2;
            background-color: #222222;
            color: #ffffff;
            font-family: var(--font-sans);
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            padding: 3px 10px;
            white-space: nowrap;
            margin-right: 16px;
            flex-shrink: 0;
            opacity: 1;
        }
        .breaking-ticker__text {
            font-family: var(--font-sans);
            font-size: 13px;
            white-space: nowrap;
            animation: ticker-scroll 30s linear infinite;
        }
        @keyframes ticker-scroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }

        /* ============================================================
           MAIN CONTENT WRAPPER
        ============================================================ */
        .site-main { padding: 24px 0 48px; }

        /* ============================================================
           SECTION DIVIDERS (WP style)
        ============================================================ */
        .section-header {
            display: flex;
            align-items: center;
            gap: 8px;
            border-top: 3px solid var(--black);
            padding-top: 10px;
            margin-bottom: 20px;
        }
        .section-header__name {
            font-family: var(--font-sans);
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            color: var(--black);
        }
        .section-header__link {
            font-family: var(--font-sans);
            font-size: 11px;
            color: var(--gray-mid);
            margin-left: auto;
        }
        .section-header__link:hover { color: var(--black); text-decoration: underline; }

        /* ============================================================
           HERO SECTION
        ============================================================ */
        .hero {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 32px;
            margin-bottom: 32px;
            align-items: start;
        }
        .hero__text { order: 1; }
        .hero__image-wrap { order: 2; }
        .hero__pretitle {
            font-family: var(--font-sans);
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: var(--red);
            margin-bottom: 10px;
        }
        .hero__title {
            font-family: var(--font-serif);
            font-size: clamp(28px, 3.2vw, 52px);
            font-weight: 700;
            line-height: 1.1;
            color: var(--black);
            margin-bottom: 14px;
            letter-spacing: -0.5px;
        }
        .hero__title a:hover { text-decoration: underline; }
        .hero__subtitle {
            font-family: var(--font-body);
            font-size: 18px;
            color: var(--gray-dark);
            line-height: 1.5;
            margin-bottom: 14px;
            font-weight: 300;
        }
        .hero__meta {
            display: flex;
            gap: 12px;
            align-items: center;
            font-family: var(--font-sans);
            font-size: 12px;
            color: var(--gray-light);
        }
        .hero__author { font-weight: 600; color: var(--gray-dark); }
        .hero__image {
            width: 100%;
            aspect-ratio: 4/3;
            object-fit: cover;
        }
        .hero__image-caption {
            font-size: 11px;
            color: var(--gray-mid);
            margin-top: 6px;
            font-style: italic;
        }

        /* ============================================================
           FEATURED GRID (3 cards)
        ============================================================ */
        .featured-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            border-top: 1px solid var(--gray-border);
            padding-top: 24px;
            margin-bottom: 36px;
        }
        .featured-card { border-right: 1px solid var(--gray-border); padding-right: 24px; }
        .featured-card:last-child { border-right: none; padding-right: 0; }
        .featured-card__image {
            width: 100%;
            aspect-ratio: 16/10;
            object-fit: cover;
            margin-bottom: 12px;
        }
        .featured-card__cat {
            font-family: var(--font-sans);
            font-size: 10px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: var(--red);
            margin-bottom: 6px;
        }
        .featured-card__title {
            font-family: var(--font-serif);
            font-size: 20px;
            font-weight: 700;
            line-height: 1.25;
            margin-bottom: 8px;
            color: var(--black);
        }
        .featured-card__title a:hover { text-decoration: underline; }
        .featured-card__subtitle {
            font-family: var(--font-body);
            font-size: 14px;
            color: var(--gray-dark);
            line-height: 1.5;
            font-weight: 300;
        }
        .featured-card__meta {
            margin-top: 10px;
            font-size: 11px;
            color: var(--gray-light);
            font-family: var(--font-sans);
        }

        /* ============================================================
           MAIN GRID LAYOUT (content + sidebar)
        ============================================================ */
        .content-sidebar {
            display: grid;
            grid-template-columns: 1fr 300px;
            gap: 40px;
            margin-top: 36px;
        }

        /* ============================================================
           CATEGORY SECTION BLOCK
        ============================================================ */
        .category-block { margin-bottom: 40px; }
        .category-block__inner {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 24px;
        }
        .category-main { }
        .category-main__image {
            width: 100%;
            aspect-ratio: 16/10;
            object-fit: cover;
            margin-bottom: 10px;
        }
        .category-main__pretitle {
            font-family: var(--font-sans);
            font-size: 10px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: var(--red);
            margin-bottom: 6px;
        }
        .category-main__title {
            font-family: var(--font-serif);
            font-size: 22px;
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 8px;
        }
        .category-main__title a:hover { text-decoration: underline; }
        .category-main__subtitle {
            font-family: var(--font-body);
            font-size: 14px;
            color: var(--gray-dark);
            line-height: 1.5;
            font-weight: 300;
        }
        .category-main__meta {
            margin-top: 8px;
            font-size: 11px;
            color: var(--gray-light);
            font-family: var(--font-sans);
        }

        .category-list {
            border-left: 1px solid var(--gray-border);
            padding-left: 24px;
            display: flex;
            flex-direction: column;
            gap: 0;
        }
        .category-list__item {
            padding: 14px 0;
            border-bottom: 1px solid var(--gray-border);
        }
        .category-list__item:first-child { padding-top: 0; }
        .category-list__item:last-child { border-bottom: none; }
        .category-list__pretitle {
            font-family: var(--font-sans);
            font-size: 10px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: var(--red);
            margin-bottom: 4px;
        }
        .category-list__title {
            font-family: var(--font-serif);
            font-size: 16px;
            font-weight: 700;
            line-height: 1.3;
            color: var(--black);
        }
        .category-list__title a:hover { text-decoration: underline; }
        .category-list__meta {
            font-family: var(--font-sans);
            font-size: 11px;
            color: var(--gray-light);
            margin-top: 4px;
        }

        /* ============================================================
           SIDEBAR
        ============================================================ */
        .sidebar { }
        .sidebar__block { margin-bottom: 32px; }
        .sidebar__title {
            font-family: var(--font-sans);
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: var(--black);
            border-top: 3px solid var(--black);
            padding-top: 10px;
            margin-bottom: 16px;
        }
        .most-read__list { list-style: none; }
        .most-read__item {
            display: flex;
            gap: 14px;
            padding: 12px 0;
            border-bottom: 1px solid var(--gray-border);
            align-items: flex-start;
        }
        .most-read__num {
            font-family: var(--font-serif);
            font-size: 28px;
            font-weight: 700;
            color: var(--gray-bg2);
            line-height: 1;
            flex-shrink: 0;
            width: 28px;
        }
        .most-read__text { }
        .most-read__title {
            font-family: var(--font-serif);
            font-size: 15px;
            font-weight: 700;
            line-height: 1.3;
            color: var(--black);
        }
        .most-read__title a:hover { text-decoration: underline; }
        .most-read__meta {
            font-family: var(--font-sans);
            font-size: 11px;
            color: var(--gray-light);
            margin-top: 3px;
        }

        .sidebar__ad {
            background: var(--gray-bg);
            border: 1px solid var(--gray-border);
            display: flex;
            align-items: center;
            justify-content: center;
            height: 250px;
            font-family: var(--font-sans);
            font-size: 11px;
            color: var(--gray-light);
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        /* ============================================================
           FOOTER
        ============================================================ */
        .footer {
            background: var(--black);
            color: var(--white);
            padding: 48px 0 24px;
            margin-top: 48px;
        }
        .footer__logo {
            text-align: center;
            margin-bottom: 24px;
            padding-bottom: 0;
        }
        .footer__logo-text {
            font-family: var(--font-serif);
            font-size: 32px;
            font-weight: 700;
            color: var(--white);
        }
        .footer__logo-motto {
            font-size: 10px;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: #888;
            margin-top: 4px;
        }
        .footer__grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 32px;
            margin-bottom: 40px;
        }
        .footer__col-title {
            font-family: var(--font-sans);
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #aaa;
            margin-bottom: 16px;
            border-bottom: 1px solid #333;
            padding-bottom: 8px;
        }
        .footer__col-list { list-style: none; }
        .footer__col-list li { margin-bottom: 8px; }
        .footer__col-list a {
            font-family: var(--font-sans);
            font-size: 13px;
            color: #ccc;
            transition: color 0.2s;
        }
        .footer__col-list a:hover { color: var(--white); text-decoration: none; }
        .footer__bottom {
            border-top: 1px solid #333;
            padding-top: 20px;
            text-align: center;
            font-family: var(--font-sans);
            font-size: 11px;
            color: #666;
        }

        /* ============================================================
           ARTICLE VIEW
        ============================================================ */
        .article-header { margin-bottom: 24px; }
        .article-pretitle {
            font-family: var(--font-sans);
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            color: var(--red);
            margin-bottom: 12px;
        }
        .article-title {
            font-family: var(--font-serif);
            font-size: clamp(26px, 3.5vw, 48px);
            font-weight: 700;
            line-height: 1.1;
            color: var(--black);
            margin-bottom: 16px;
            letter-spacing: -0.5px;
        }
        .article-subtitle {
            font-family: var(--font-body);
            font-size: 20px;
            color: var(--gray-dark);
            line-height: 1.5;
            font-weight: 300;
            margin-bottom: 20px;
            border-left: 4px solid var(--black);
            padding-left: 16px;
        }
        .article-meta {
            display: flex;
            gap: 16px;
            align-items: center;
            flex-wrap: wrap;
            padding: 16px 0;
            border-top: 1px solid var(--gray-border);
            border-bottom: 1px solid var(--gray-border);
            margin-bottom: 24px;
        }
        .article-meta__author {
            font-family: var(--font-sans);
            font-size: 13px;
            font-weight: 700;
            color: var(--black);
        }
        .article-meta__date {
            font-family: var(--font-sans);
            font-size: 12px;
            color: var(--gray-light);
        }
        .article-meta__category a {
            font-family: var(--font-sans);
            font-size: 10px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            background: var(--black);
            color: var(--white);
            padding: 3px 8px;
        }
        .article-hero-image { width: 100%; margin-bottom: 8px; }
        .article-hero-image img { width: 100%; max-height: 520px; object-fit: cover; }
        .article-hero-caption {
            font-family: var(--font-sans);
            font-size: 11px;
            color: var(--gray-mid);
            font-style: italic;
            margin-bottom: 24px;
        }
        .article-body {
            font-family: var(--font-body);
            font-size: 18px;
            line-height: 1.75;
            color: var(--black);
            max-width: 740px;
        }
        .article-body p { margin-bottom: 1.4em; }
        .article-body h2 {
            font-family: var(--font-serif);
            font-size: 26px;
            font-weight: 700;
            margin: 1.8em 0 0.6em;
            color: var(--black);
        }
        .article-body blockquote {
            border-left: 4px solid var(--black);
            padding: 16px 24px;
            margin: 2em 0;
            background: var(--gray-bg);
            font-size: 20px;
            font-style: italic;
            color: var(--gray-dark);
        }
        .article-body strong { font-weight: 700; }
        .article-body a { color: var(--blue-accent); text-decoration: underline; }

        /* ============================================================
           CATEGORY PAGE
        ============================================================ */
        .cat-page-header {
            border-top: 3px solid var(--black);
            border-bottom: 1px solid var(--gray-border);
            padding: 12px 0 16px;
            margin-bottom: 32px;
        }
        .cat-page-header__name {
            font-family: var(--font-serif);
            font-size: 38px;
            font-weight: 700;
            color: var(--black);
        }
        .cat-page-hero {
            display: grid;
            grid-template-columns: 3fr 2fr;
            gap: 32px;
            margin-bottom: 32px;
            padding-bottom: 32px;
            border-bottom: 1px solid var(--gray-border);
        }
        .cat-page-hero__image { width: 100%; aspect-ratio: 16/10; object-fit: cover; }
        .cat-news-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
        }
        .news-card { border-top: 1px solid var(--gray-border); padding-top: 16px; }
        .news-card__image { width: 100%; aspect-ratio: 16/10; object-fit: cover; margin-bottom: 10px; }
        .news-card__pretitle {
            font-family: var(--font-sans);
            font-size: 10px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: var(--red);
            margin-bottom: 6px;
        }
        .news-card__title {
            font-family: var(--font-serif);
            font-size: 18px;
            font-weight: 700;
            line-height: 1.25;
            margin-bottom: 8px;
            color: var(--black);
        }
        .news-card__title a:hover { text-decoration: underline; }
        .news-card__subtitle {
            font-family: var(--font-body);
            font-size: 13px;
            color: var(--gray-dark);
            line-height: 1.5;
            font-weight: 300;
        }
        .news-card__meta {
            font-family: var(--font-sans);
            font-size: 11px;
            color: var(--gray-light);
            margin-top: 8px;
        }

        /* ---- Pagination ---- */
        .pagination-wrap {
            display: flex;
            justify-content: center;
            gap: 4px;
            margin-top: 40px;
            padding-top: 32px;
            border-top: 1px solid var(--gray-border);
        }
        .pagination-wrap a, .pagination-wrap span {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            font-family: var(--font-sans);
            font-size: 13px;
            border: 1px solid var(--gray-border);
            color: var(--black);
            transition: background 0.15s;
        }
        .pagination-wrap a:hover { background: var(--gray-bg); text-decoration: none; }
        .pagination-wrap .active { background: var(--black); color: var(--white); border-color: var(--black); }

        /* ============================================================
           RESPONSIVE
        ============================================================ */
        @media (max-width: 1024px) {
            .hero { grid-template-columns: 1fr; }
            .hero__image-wrap { order: -1; }
            .content-sidebar { grid-template-columns: 1fr; }
            .footer__grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 768px) {
            .featured-grid { grid-template-columns: 1fr; }
            .featured-card { border-right: none; border-bottom: 1px solid var(--gray-border); padding-right: 0; padding-bottom: 20px; }
            .category-block__inner { grid-template-columns: 1fr; }
            .category-list { border-left: none; padding-left: 0; border-top: 1px solid var(--gray-border); padding-top: 16px; }
            .cat-page-hero { grid-template-columns: 1fr; }
            .cat-news-grid { grid-template-columns: 1fr 1fr; }
            .footer__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
            .main-nav__item a { padding: 10px 10px; font-size: 12px; }
            .cat-news-grid { grid-template-columns: 1fr; }
            .footer__grid { grid-template-columns: 1fr; }
        }
    </style>

    @stack('styles')
</head>
<body>

    {{-- TOP BAR --}}
    <div class="top-bar">
        <div class="container">
            <div class="top-bar__inner">
                <span class="top-bar__date">{{ now()->locale('es')->isoFormat('dddd, D [de] MMMM [de] YYYY') }}</span>
            </div>
        </div>
    </div>

    {{-- MASTHEAD --}}
    <header class="masthead">
        <div class="container">
            <div class="masthead__top">
                <div class="masthead__logo">
                    <a href="{{ route('home') }}">
                        <div class="masthead__logo-text">Bolivian Daily</div>
                    </a>
                </div>
            </div>
        </div>

        {{-- NAVIGATION --}}
        <nav class="main-nav" aria-label="Navegación principal">
            <div class="container">
                <ul class="main-nav__list">
                    <li class="main-nav__item main-nav__item--home">
                        <a href="{{ route('home') }}" class="{{ request()->routeIs('home') ? 'active' : '' }}">Inicio</a>
                    </li>
                    @php
                        $navCategories = \App\Models\Category::where('state','A')->get();
                    @endphp
                    @foreach($navCategories as $navCat)
                    <li class="main-nav__item">
                        <a href="{{ route('category.show', ['category' => $navCat->url]) }}"
                           class="{{ (request()->route('url') === $navCat->url) ? 'active' : '' }}">
                            {{ $navCat->name }}
                        </a>
                    </li>
                    @endforeach
                </ul>
            </div>
        </nav>
    </header>

    {{-- BREAKING TICKER --}}
    <div class="breaking-ticker">
        <div class="breaking-ticker__label">Última hora</div>
        <div class="breaking-ticker__text">
            Bolivia anuncia plan de inversión histórico de $2.500 millones &nbsp;&nbsp;&bull;&nbsp;&nbsp;
            La Verde empata ante Venezuela en eliminatorias &nbsp;&nbsp;&bull;&nbsp;&nbsp;
            Exportaciones de litio suben 45% en primer trimestre &nbsp;&nbsp;&bull;&nbsp;&nbsp;
            Carnaval de Oruro bate récord con 600.000 visitantes &nbsp;&nbsp;&bull;&nbsp;&nbsp;
            Bolivia anuncia plan de inversión histórico de $2.500 millones &nbsp;&nbsp;&bull;&nbsp;&nbsp;
            La Verde empata ante Venezuela en eliminatorias &nbsp;&nbsp;&bull;&nbsp;&nbsp;
            Exportaciones de litio suben 45% en primer trimestre &nbsp;&nbsp;&bull;&nbsp;&nbsp;
            Carnaval de Oruro bate récord con 600.000 visitantes
        </div>
    </div>

    {{-- MAIN CONTENT --}}
    <main class="site-main">
        <div class="container">
            @yield('content')
        </div>
    </main>

    {{-- FOOTER --}}
    <footer class="footer">
        <div class="container">
            <div class="footer__logo">
                <div class="footer__logo-text">Bolivian Daily</div>
            </div>
            <div class="footer__bottom">
                &copy; {{ date('Y') }} Bolivian Daily. Todos los derechos reservados.
            </div>
        </div>
    </footer>

    @stack('scripts')
</body>
</html>
