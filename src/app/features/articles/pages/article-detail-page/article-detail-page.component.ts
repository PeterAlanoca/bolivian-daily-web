import { Component, input, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MOCK_NEWS_SIGNAL } from '../../../../core/data/mock-data';
import { CategoryStore } from '@core/state/store/category.store';
import { SidebarComponent } from '../../../news/components/sidebar/sidebar.component';

@Component({
  selector: 'app-article-detail-page',
  standalone: true,
  imports: [RouterLink, SidebarComponent],
  templateUrl: './article-detail-page.component.html',
  styleUrl: './article-detail-page.component.css',
})
export class ArticleDetailPageComponent {
  // Inputs bound to route params :category and :slug
  readonly category = input<string>();
  readonly slug = input<string>();

  // Global state signals
  newsList = MOCK_NEWS_SIGNAL;
  private categoryStore = inject(CategoryStore);
  categories = this.categoryStore.categories;

  private sanitizer = inject(DomSanitizer);

  // Find active article based on slug route parameter
  readonly article = computed(() => {
    const articleSlug = this.slug();
    return this.newsList().find((news) => news.url === articleSlug) || null;
  });

  // Category of the active article
  readonly articleCategory = computed(() => {
    const art = this.article();
    if (!art) return null;
    return this.categories().find((cat) => cat.id === art.category_id) || null;
  });

  // Hero image URL of the active article
  readonly heroImageUrl = computed(() => {
    const art = this.article();
    return art && art.multimedia && art.multimedia.length > 0 ? art.multimedia[0].url : '';
  });

  // Gallery images (excluding the first hero image)
  readonly galleryImages = computed(() => {
    const art = this.article();
    if (!art || !art.multimedia) return [];
    return art.multimedia.slice(1);
  });

  // Sanitized body HTML
  readonly sanitizedBody = computed(() => {
    const art = this.article();
    if (!art) return '';
    return this.sanitizer.bypassSecurityTrustHtml(art.body);
  });

  // Related news of the same category (excluding the current article)
  readonly relatedCategoryNews = computed(() => {
    const art = this.article();
    if (!art) return [];
    return this.newsList().filter((news) => news.category_id === art.category_id && news.id !== art.id);
  });

  // Format date in Spanish
  formatFullDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return date.toLocaleDateString('es-ES', options);
  }
}
