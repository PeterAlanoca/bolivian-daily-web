import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MOCK_NEWS_SIGNAL, MOCK_CATEGORIES_SIGNAL } from '../../core/data/mock-data';
import { News } from '../../core/models/news.model';
import { TimeAgoPipe } from '../../shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    TimeAgoPipe
  ],
  template: `
    <div class="site-main">
      <div class="container">
        
        <!-- 3-COLUMN TOP FOLD (THE NEWSPAPER FRONT PAGE HERO) -->
        <div class="top-fold-grid">
          
          <!-- LEFT COLUMN: Secondary News Headlines List -->
          <div class="top-fold-grid__column top-fold-grid__column--left">
            @for (item of leftColumnNews(); track item.id) {
              <article class="story">
                @if (item.pretitle) {
                  <div class="story__pretitle">{{ item.pretitle }}</div>
                }
                <h3 class="story__title" style="font-size: 15px;">
                  <a [routerLink]="['/', item.category?.url, item.url]">{{ item.title }}</a>
                </h3>
                <p class="story__excerpt" style="font-size: 13px;">{{ item.subtitle }}</p>
                <div class="story__meta">
                  @if (item.author) {
                    <span>Por <span class="story__author">{{ item.author }}</span> &middot; </span>
                  }
                  <span>{{ item.publication_date | timeAgo }}</span>
                </div>
              </article>
            }
          </div>

          <!-- CENTER COLUMN: Main Lead Story (CVI) -->
          <div class="top-fold-grid__column">
            @if (leadNews()) {
              <article class="lead-story">
                @if (leadImageUrl()) {
                  <div class="lead-story__image-wrap">
                    <a [routerLink]="['/', leadNews().category?.url, leadNews().url]">
                      <img [src]="leadImageUrl()" [alt]="leadNews().title" loading="eager">
                    </a>
                    <p style="font-size: 10px; color: var(--gray-mid); margin-top: 4px; font-style: italic; font-family: var(--font-sans);">
                      FOTO: {{ leadNews().author }} / Bolivian Daily
                    </p>
                  </div>
                }
                @if (leadNews().pretitle) {
                  <div class="story__pretitle" style="font-size: 11px; margin-bottom: 4px;">{{ leadNews().pretitle }}</div>
                }
                <h1 class="lead-story__title">
                  <a [routerLink]="['/', leadNews().category?.url, leadNews().url]">{{ leadNews().title }}</a>
                </h1>
                <p class="lead-story__excerpt">{{ leadNews().subtitle }}</p>
                <p style="font-family: var(--font-body); font-size: 14px; line-height: 1.5; color: var(--gray-dark); margin-bottom: 8px;">
                  {{ leadNews().enter }}
                </p>
                <div class="lead-story__meta">
                  @if (leadNews().author) {
                    <span>Por <span class="lead-story__author">{{ leadNews().author }}</span></span>
                  }
                  <span>&bull;</span>
                  <span>{{ leadNews().publication_date | timeAgo }}</span>
                </div>
              </article>
            }
          </div>

          <!-- RIGHT COLUMN: Opinion & Editorial Columns -->
          <div class="top-fold-grid__column top-fold-grid__column--right">
            <div style="border-bottom: 2px solid var(--black); padding-bottom: 6px; margin-bottom: 16px;">
              <h2 style="font-family: var(--font-sans); font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: var(--black);">Opinión</h2>
            </div>
            
            @for (item of opinionNews(); track item.id) {
              <article class="opinion-card">
                <div class="opinion-card__author">{{ item.author || 'Editorial' }}</div>
                <h3 class="opinion-card__title">
                  <a [routerLink]="['/', item.category?.url, item.url]">«{{ item.title }}»</a>
                </h3>
                <div style="font-family: var(--font-sans); font-size: 9px; color: var(--gray-light); font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-top: 4px;">
                  {{ item.publication_date | timeAgo }}
                </div>
              </article>
            }
          </div>

        </div>

        <!-- MODULAR HORIZONTAL ROWS FOR SECTIONS -->
        @for (cat of activeCategories(); track cat.id) {
          @if (getCategoryNews(cat.id).length > 0) {
            <section class="section-row" attr.aria-label="Sección {{ cat.name }}">
              <div class="section-row__header">
                <h2 class="section-row__title">{{ cat.name }}</h2>
                <a class="section-row__link" [routerLink]="['/', cat.url]">Ver más &rsaquo;</a>
              </div>
              
              <div class="section-grid">
                <!-- Left: Big Story for this category -->
                <div class="section-grid__left">
                  @if (getCategoryMainNews(cat.id); as mainNews) {
                    <article class="story" style="border-bottom: none; padding-bottom: 0; margin-bottom: 0;">
                      @if (itemImageUrl(mainNews)) {
                        <a [routerLink]="['/', mainNews.category?.url, mainNews.url]" style="margin-bottom: 12px; display: block;">
                          <img [src]="itemImageUrl(mainNews)" [alt]="mainNews.title" style="aspect-ratio: 16/10; object-fit: cover;">
                        </a>
                      }
                      @if (mainNews.pretitle) {
                        <div class="story__pretitle">{{ mainNews.pretitle }}</div>
                      }
                      <h3 class="story__title" style="font-size: 20px;">
                        <a [routerLink]="['/', mainNews.category?.url, mainNews.url]">{{ mainNews.title }}</a>
                      </h3>
                      <p class="story__excerpt" style="font-size: 13px;">{{ mainNews.subtitle }}</p>
                      <div class="story__meta">
                        @if (mainNews.author) {
                          <span>Por <span class="story__author">{{ mainNews.author }}</span> &middot; </span>
                        }
                        <span>{{ mainNews.publication_date | timeAgo }}</span>
                      </div>
                    </article>
                  }
                </div>
                
                <!-- Right: 3 side stories in grid -->
                <div class="section-grid__right-cards">
                  @for (side of getCategorySideNews(cat.id); track side.id) {
                    <article class="story" style="border-bottom: none; padding-bottom: 0; margin-bottom: 0;">
                      @if (itemImageUrl(side)) {
                        <a [routerLink]="['/', side.category?.url, side.url]" style="margin-bottom: 10px; display: block;">
                          <img [src]="itemImageUrl(side)" [alt]="side.title" style="aspect-ratio: 16/10; object-fit: cover; border: 1px solid var(--gray-border);">
                        </a>
                      }
                      @if (side.pretitle) {
                        <div class="story__pretitle">{{ side.pretitle }}</div>
                      }
                      <h4 class="story__title" style="font-size: 14px; font-weight: 700;">
                        <a [routerLink]="['/', side.category?.url, side.url]">{{ side.title }}</a>
                      </h4>
                      <div class="story__meta" style="margin-top: 4px;">
                        <span>{{ side.publication_date | timeAgo }}</span>
                      </div>
                    </article>
                  }
                </div>
              </div>
            </section>
          }
        }

      </div>
    </div>
  `
})
export class HomeComponent {
  newsList = MOCK_NEWS_SIGNAL;
  categories = MOCK_CATEGORIES_SIGNAL;

  // Lead Story (News 1)
  leadNews = computed(() => this.newsList()[0]);
  
  leadImageUrl = computed(() => {
    const lead = this.leadNews();
    return lead && lead.multimedia && lead.multimedia.length > 0 ? lead.multimedia[0].url : '';
  });

  // Left Column News (News 4, 5, 6 - to avoid duplication)
  leftColumnNews = computed(() => this.newsList().slice(3, 6));

  // Right Column Opinions (News 2, 7, 9)
  opinionNews = computed(() => {
    const list = this.newsList();
    return [list[1], list[6], list[8]].filter(Boolean);
  });

  // Active categories for the modular buckets
  activeCategories = computed(() => {
    return this.categories().filter(cat => 
      this.newsList().some(news => news.category_id === cat.id)
    );
  });

  // Helper methods
  getCategoryNews(catId: number) {
    return this.newsList().filter(n => n.category_id === catId);
  }

  getCategoryMainNews(catId: number) {
    const list = this.getCategoryNews(catId);
    return list.length > 0 ? list[0] : null;
  }

  getCategorySideNews(catId: number) {
    // Return up to 3 side stories in the category (skipping the main one)
    return this.getCategoryNews(catId).slice(1, 4);
  }

  itemImageUrl(item: News): string {
    return item.multimedia && item.multimedia.length > 0 ? item.multimedia[0].url : '';
  }
}
