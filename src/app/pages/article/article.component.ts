import { Component, input, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MOCK_NEWS_SIGNAL, MOCK_CATEGORIES_SIGNAL } from '../../core/data/mock-data';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { News } from '../../core/models/news.model';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [RouterLink, SidebarComponent],
  template: `
    <div class="site-main">
      <div class="container">
        
        <!-- Breadcrumb -->
        <div class="breadcrumb" style="font-family: var(--font-sans); font-size: 11px; color: var(--gray-light); letter-spacing: .05em; margin-bottom: 28px; text-transform: uppercase; display: flex; align-items: center; gap: 8px;">
          <a routerLink="/" style="color: var(--gray-mid); font-weight: 500;">Inicio</a>
          <span style="color: var(--gray-border);">&rsaquo;</span>
          @if (articleCategory()) {
            <a [routerLink]="['/', articleCategory()?.url]" style="font-weight: 700; color: var(--black);">
              {{ articleCategory()?.name }}
            </a>
          }
        </div>

        @if (article()) {
          <div class="article-view-layout" style="margin-top: 0;">
            
            <!-- Left: Main Article Detail -->
            <article class="article-view-layout__main">
              <header class="article-header">
                @if (article()?.pretitle) {
                  <div class="article-pretitle">{{ article()?.pretitle }}</div>
                }
                <h1 class="article-title">{{ article()?.title }}</h1>
                
                @if (article()?.subtitle) {
                  <p class="article-subtitle">
                    {{ article()?.subtitle }}
                  </p>
                }

                <div class="article-meta">
                  @if (articleCategory()) {
                    <div class="article-meta__category">
                      <a [routerLink]="['/', articleCategory()?.url]">{{ articleCategory()?.name }}</a>
                    </div>
                  }
                  @if (article()?.author) {
                    <div class="article-meta__author">
                      Por {{ article()?.author }}
                    </div>
                  }
                  @if (article()?.publication_date) {
                    <div class="article-meta__date">
                      {{ formatFullDate(article()?.publication_date!) }}
                    </div>
                  }
                  @if (article()?.source) {
                    <div class="article-meta__source">
                      Fuente: {{ article()?.source?.name }}
                    </div>
                  }
                </div>
              </header>

              <!-- Hero image -->
              @if (heroImageUrl()) {
                <div class="article-hero-image">
                  <img [src]="heroImageUrl()" [alt]="article()?.title">
                  @if (article()?.author) {
                    <p class="article-hero-caption">
                      {{ article()?.author }} / {{ article()?.source?.name || 'Bolivian Daily' }}
                    </p>
                  }
                </div>
              }

              <!-- Intro / Excerpt (enter) -->
              @if (article()?.enter) {
                <div style="font-family: var(--font-body); font-size: 20px; font-weight: 600; line-height: 1.6; color: var(--black); margin-bottom: 32px;">
                  {{ article()?.enter }}
                </div>
              }

              <!-- Body Content (HTML rendered safely) -->
              <div class="article-body" [innerHTML]="sanitizedBody()"></div>

              <!-- Additional multimedia gallery -->
              @if (galleryImages().length > 0) {
                <div style="margin-top: 48px; border-top: 1px solid var(--gray-border); padding-top: 32px;">
                  <div class="section-header" style="margin-bottom: 24px;">
                    <span class="section-header__name">Galería de Imágenes</span>
                  </div>
                  <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 20px;">
                    @for (img of galleryImages(); track img.id) {
                      <figure style="margin: 0;">
                        <img [src]="img.url" [alt]="img.description || article()?.title" style="width: 100%; aspect-ratio: 4/3; object-fit: cover; border: 1px solid var(--gray-border);">
                        @if (img.description) {
                          <figcaption style="font-family: var(--font-sans); font-size: 11px; color: var(--gray-mid); margin-top: 8px; font-style: italic; line-height: 1.4;">
                            {{ img.description }}
                          </figcaption>
                        }
                      </figure>
                    }
                  </div>
                </div>
              }

            </article>

            <!-- Right: Sidebar (Related news of this category) -->
            <div class="article-view-layout__sidebar">
              <app-sidebar [relatedNews]="relatedCategoryNews()"></app-sidebar>
            </div>

          </div>
        } @else {
          <div style="text-align: center; padding: 80px 0; font-family: var(--font-sans); color: var(--gray-light);">
            <p style="font-size: 24px; margin-bottom: 8px;">Artículo no encontrado</p>
            <p>La noticia que buscas no existe o ha sido retirada.</p>
            <a routerLink="/" style="display: inline-block; margin-top: 24px; color: var(--blue-accent); text-decoration: underline;">Volver a Inicio</a>
          </div>
        }

      </div>
    </div>
  `
})
export class ArticleComponent {
  // Inputs bound to route params :category and :slug
  category = input<string>();
  slug = input<string>();

  // Global state signals
  newsList = MOCK_NEWS_SIGNAL;
  categories = MOCK_CATEGORIES_SIGNAL;

  constructor(private sanitizer: DomSanitizer) {}

  // Find active article based on slug route parameter
  article = computed(() => {
    const articleSlug = this.slug();
    return this.newsList().find(news => news.url === articleSlug) || null;
  });

  // Category of the active article
  articleCategory = computed(() => {
    const art = this.article();
    if (!art) return null;
    return this.categories().find(cat => cat.id === art.category_id) || null;
  });

  // Hero image URL of the active article
  heroImageUrl = computed(() => {
    const art = this.article();
    return art && art.multimedia && art.multimedia.length > 0 ? art.multimedia[0].url : '';
  });

  // Gallery images (excluding the first hero image)
  galleryImages = computed(() => {
    const art = this.article();
    if (!art || !art.multimedia) return [];
    return art.multimedia.slice(1);
  });

  // Sanitized body HTML
  sanitizedBody = computed(() => {
    const art = this.article();
    if (!art) return '';
    return this.sanitizer.bypassSecurityTrustHtml(art.body);
  });

  // Related news of the same category (excluding the current article)
  relatedCategoryNews = computed(() => {
    const art = this.article();
    if (!art) return [];
    return this.newsList().filter(news => 
      news.category_id === art.category_id && news.id !== art.id
    );
  });

  // Format date in Spanish
  formatFullDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return date.toLocaleDateString('es-ES', options);
  }
}
