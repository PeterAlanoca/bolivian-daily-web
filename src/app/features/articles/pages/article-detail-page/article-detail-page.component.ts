import { Component, input, computed, inject, effect } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CategoryStore } from '@core/state/store/category.store';
import { parseArticleIdFromSlug } from '@core/utils/slug.utils';
import { CategoryArticlesStore } from '../../../categories/data-access/store/category-articles.store';
import { ArticleDetailStore } from '../../data-access/store/article-detail.store';
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

  private readonly articleDetailStore = inject(ArticleDetailStore);
  private readonly categoryArticlesStore = inject(CategoryArticlesStore);
  private readonly categoryStore = inject(CategoryStore);
  private readonly sanitizer = inject(DomSanitizer);

  // Store signals
  readonly article = this.articleDetailStore.article;
  readonly loading = this.articleDetailStore.loading;
  readonly error = this.articleDetailStore.error;

  readonly categories = this.categoryStore.categories;
  readonly categoryArticles = this.categoryArticlesStore.articles;

  // Extracted article numeric ID from MercadoLibre-style slug
  readonly articleId = computed(() => parseArticleIdFromSlug(this.slug()));

  // Category of the active article
  readonly articleCategory = computed(() => {
    const art = this.article();
    const catSlug = this.category();
    if (art?.categoryId) {
      const found = this.categories().find((cat) => cat.id === art.categoryId);
      if (found) return found;
    }
    if (catSlug) {
      const found = this.categories().find((cat) => cat.slug.toLowerCase() === catSlug.toLowerCase());
      if (found) return found;
    }
    return null;
  });

  // Hero image (first media item if available)
  readonly heroImage = computed(() => {
    const art = this.article();
    if (!art || !art.media || art.media.length === 0) return null;
    return art.media[0];
  });

  // Gallery images (excluding the first hero image)
  readonly galleryImages = computed(() => {
    const art = this.article();
    if (!art || !art.media || art.media.length <= 1) return [];
    return art.media.slice(1);
  });

  // Sanitized body HTML
  readonly sanitizedBody = computed<SafeHtml>(() => {
    const art = this.article();
    if (!art?.body) return '';
    return this.sanitizer.bypassSecurityTrustHtml(art.body);
  });

  // Related news of the same category (excluding the current article, limited to 3)
  readonly relatedCategoryNews = computed(() => {
    const currentId = this.articleId();
    return this.categoryArticles()
      .filter((news) => news.id !== currentId)
      .slice(0, 3);
  });

  // Excluded IDs for sidebar deduplication
  readonly excludedArticleIds = computed(() => {
    const id = this.articleId();
    return id !== null ? [id] : [];
  });

  constructor() {
    // Reactively load article details whenever the extracted ID changes
    effect(() => {
      const id = this.articleId();
      if (id !== null) {
        this.articleDetailStore.load(id);
      }
    });

    // Reactively load category articles for the sidebar whenever the category changes
    effect(() => {
      const catSlug = this.category();
      if (catSlug) {
        this.categoryArticlesStore.load(catSlug);
      }
    });
  }

  retry(): void {
    const id = this.articleId();
    if (id !== null) {
      this.articleDetailStore.load(id);
    }
    const catSlug = this.category();
    if (catSlug) {
      this.categoryArticlesStore.load(catSlug);
    }
  }

  // Format date in Spanish (e.g., "4 de octubre de 2026, 00:53")
  formatFullDate(dateString?: string): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return '';
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
