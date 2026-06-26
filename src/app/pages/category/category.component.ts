import { Component, input, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MOCK_NEWS_SIGNAL, MOCK_CATEGORIES_SIGNAL } from '../../core/data/mock-data';
import { NewsCardComponent } from '../../shared/components/news-card/news-card.component';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { TimeAgoPipe } from '../../shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [RouterLink, NewsCardComponent, SidebarComponent, TimeAgoPipe],
  template: `
    <div class="site-main">
      <div class="container">
        
        <!-- Category header -->
        @if (activeCategory()) {
          <div class="cat-page-header">
            <h1 class="cat-page-header__name">{{ activeCategory()?.name }}</h1>
          </div>
        }

        @if (categoryNews().length > 0) {
          
          <!-- Hero of the category (first article) -->
          @if (categoryHeroNews()) {
            <div class="cat-page-hero">
              @if (heroImageUrl()) {
                <div>
                  <a [routerLink]="['/', activeCategory()?.url, categoryHeroNews()?.url]">
                    <img class="cat-page-hero__image" [src]="heroImageUrl()" [alt]="categoryHeroNews()?.title" loading="eager">
                  </a>
                </div>
              }
              
              <div style="display: flex; flex-direction: column; justify-content: flex-start;">
                @if (categoryHeroNews()?.pretitle) {
                  <div class="hero__pretitle" style="margin-bottom: 8px;">
                    {{ categoryHeroNews()?.pretitle }}
                  </div>
                }
                <h2 class="hero__title" style="font-size: clamp(24px, 3vw, 38px); margin-bottom: 12px;">
                  <a [routerLink]="['/', activeCategory()?.url, categoryHeroNews()?.url]">{{ categoryHeroNews()?.title }}</a>
                </h2>
                @if (categoryHeroNews()?.subtitle) {
                  <p class="hero__subtitle" style="font-size: 16px; margin-bottom: 12px;">
                    {{ categoryHeroNews()?.subtitle }}
                  </p>
                }
                @if (categoryHeroNews()?.enter) {
                  <p style="font-family: var(--font-body); font-size: 15px; color: var(--gray-dark); line-height: 1.6; margin-bottom: 16px;">
                    {{ categoryHeroNews()?.enter }}
                  </p>
                }
                <div class="hero__meta" style="margin-top: auto;">
                  @if (categoryHeroNews()?.author) {
                    <span class="hero__author">{{ categoryHeroNews()?.author }}</span>
                  }
                  <span>{{ categoryHeroNews()?.publication_date | timeAgo }}</span>
                </div>
              </div>
            </div>
          }

          <!-- Section header for the grid -->
          <div class="section-header" style="margin-top: 32px;">
            <span class="section-header__name">Todas las noticias de {{ activeCategory()?.name }}</span>
          </div>

          <!-- News grid + Sidebar Layout -->
          <div class="article-view-layout" style="margin-top: 0;">
            <!-- Left side: Grid (skip the first one already shown as hero) -->
            <div class="article-view-layout__main">
              @if (categoryGridNews().length > 0) {
                <div class="cat-news-grid">
                  @for (item of categoryGridNews(); track item.id) {
                    <app-news-card 
                      [news]="item" 
                      type="grid-card"
                    ></app-news-card>
                  }
                </div>
              } @else {
                <p style="color: var(--gray-light); font-family: var(--font-sans); font-size: 14px; text-align: center; padding: 24px 0;">
                  No hay más noticias disponibles en esta categoría.
                </p>
              }

              <!-- Pagination (Visual-only mockup) -->
              @if (categoryNews().length > 1) {
                <div class="pagination-wrap">
                  <ul class="pagination">
                    <li class="page-item disabled"><span class="page-link">&laquo;</span></li>
                    <li class="page-item active"><span class="page-link">1</span></li>
                    <li class="page-item"><span class="page-link">2</span></li>
                    <li class="page-item"><span class="page-link">&raquo;</span></li>
                  </ul>
                </div>
              }
            </div>

            <!-- Right side: Sidebar (with Related news: we can pass other news from this category) -->
            <div class="article-view-layout__sidebar">
              <app-sidebar [relatedNews]="categorySidebarNews()"></app-sidebar>
            </div>
          </div>

        } @else {
          <div style="text-align: center; padding: 80px 0; font-family: var(--font-sans); color: var(--gray-light);">
            <p style="font-size: 24px; margin-bottom: 8px;">No hay noticias todavía en {{ activeCategory()?.name }}</p>
            <p>Vuelve pronto para encontrar contenido en esta sección.</p>
          </div>
        }

      </div>
    </div>
  `
})
export class CategoryComponent {
  // Bound to the :category router param
  category = input<string>();

  // Global state signals
  newsList = MOCK_NEWS_SIGNAL;
  categories = MOCK_CATEGORIES_SIGNAL;

  // Find category based on route parameter
  activeCategory = computed(() => {
    const slug = this.category();
    return this.categories().find(cat => cat.url === slug) || null;
  });

  // Filter news belonging to the active category
  categoryNews = computed(() => {
    const cat = this.activeCategory();
    if (!cat) return [];
    return this.newsList().filter(news => news.category_id === cat.id);
  });

  // Hero news is the first item in the category
  categoryHeroNews = computed(() => {
    const news = this.categoryNews();
    return news.length > 0 ? news[0] : null;
  });

  heroImageUrl = computed(() => {
    const hero = this.categoryHeroNews();
    return hero && hero.multimedia && hero.multimedia.length > 0 ? hero.multimedia[0].url : '';
  });

  // Grid news are the rest (skipping the first item)
  categoryGridNews = computed(() => {
    return this.categoryNews().slice(1);
  });

  // News for sidebar related block (could be other news in this category to display under related, e.g. up to 2 items)
  categorySidebarNews = computed(() => {
    return this.categoryNews().slice(0, 3);
  });
}
