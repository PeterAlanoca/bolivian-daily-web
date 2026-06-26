import { Component, input, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { News } from '../../../core/models/news.model';
import { TimeAgoPipe } from '../../pipes/time-ago.pipe';
import { TruncatePipe } from '../../pipes/truncate.pipe';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [RouterLink, TimeAgoPipe, TruncatePipe],
  template: `
    <!-- FEATURED CARD -->
    @if (type() === 'featured') {
      <article class="featured-card">
        @if (imageUrl()) {
          <a [routerLink]="['/', news().category?.url, news().url]">
            <img class="featured-card__image" [src]="imageUrl()" [alt]="news().title" loading="lazy">
          </a>
        }
        @if (news().category) {
          <div class="featured-card__cat">
            {{ news().category?.name }}
          </div>
        }
        <h2 class="featured-card__title">
          <a [routerLink]="['/', news().category?.url, news().url]">{{ news().title }}</a>
        </h2>
        @if (news().subtitle) {
          <p class="featured-card__subtitle">
            {{ news().subtitle | truncate:120 }}
          </p>
        }
        <div class="featured-card__meta">
          @if (news().author) {
            <span>{{ news().author }} &middot; </span>
          }
          <span>{{ news().publication_date | timeAgo }}</span>
        </div>
      </article>
    }

    <!-- CATEGORY MAIN CARD -->
    @if (type() === 'category-main') {
      <article class="category-main">
        @if (imageUrl()) {
          <a [routerLink]="['/', news().category?.url, news().url]">
            <img class="category-main__image" [src]="imageUrl()" [alt]="news().title" loading="lazy">
          </a>
        }
        @if (news().pretitle) {
          <div class="category-main__pretitle">
            {{ news().pretitle }}
          </div>
        }
        <h2 class="category-main__title">
          <a [routerLink]="['/', news().category?.url, news().url]">{{ news().title }}</a>
        </h2>
        @if (news().subtitle) {
          <p class="category-main__subtitle">
            {{ news().subtitle | truncate:140 }}
          </p>
        }
        <div class="category-main__meta">
          @if (news().author) {
            <span>{{ news().author }} &middot; </span>
          }
          <span>{{ news().publication_date | timeAgo }}</span>
        </div>
      </article>
    }

    <!-- LIST ITEM CARD (HEADLINE ONLY) -->
    @if (type() === 'list-item') {
      <article class="category-list__item">
        @if (news().pretitle) {
          <div class="category-list__pretitle">
            {{ news().pretitle }}
          </div>
        }
        <h3 class="category-list__title">
          <a [routerLink]="['/', news().category?.url, news().url]">{{ news().title }}</a>
        </h3>
        <div class="category-list__meta">
          @if (news().author) {
            <span>{{ news().author }} &middot; </span>
          }
          <span>{{ news().publication_date | timeAgo }}</span>
        </div>
      </article>
    }

    <!-- STANDARD GRID CARD -->
    @if (type() === 'grid-card') {
      <article class="news-card">
        @if (imageUrl()) {
          <a [routerLink]="['/', news().category?.url, news().url]">
            <img class="news-card__image" [src]="imageUrl()" [alt]="news().title" loading="lazy">
          </a>
        }
        @if (news().pretitle) {
          <div class="news-card__pretitle">
            {{ news().pretitle }}
          </div>
        }
        <h2 class="news-card__title">
          <a [routerLink]="['/', news().category?.url, news().url]">{{ news().title }}</a>
        </h2>
        @if (news().subtitle) {
          <p class="news-card__subtitle">
            {{ news().subtitle | truncate:100 }}
          </p>
        }
        <div class="news-card__meta">
          @if (news().author) {
            <span>{{ news().author }} &middot; </span>
          }
          <span>{{ news().publication_date | timeAgo }}</span>
        </div>
      </article>
    }
  `
})
export class NewsCardComponent {
  // Signal-based inputs in Angular 19+
  news = input.required<News>();
  type = input<'featured' | 'category-main' | 'list-item' | 'grid-card'>('grid-card');

  // Computed property to extract image URL
  imageUrl = computed(() => {
    const media = this.news().multimedia;
    if (media && media.length > 0) {
      return media[0].url;
    }
    return '';
  });
}
