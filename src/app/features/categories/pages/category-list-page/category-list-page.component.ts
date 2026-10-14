import { Component, input, computed, inject, effect } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoryArticlesStore } from '../../data-access/store/category-articles.store';
import { NewsCardComponent } from '@features/news/components/news-card/news-card.component';
import { SidebarComponent } from '@features/news/components/sidebar/sidebar.component';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-category-list-page',
  standalone: true,
  imports: [RouterLink, NewsCardComponent, SidebarComponent, TimeAgoPipe],
  templateUrl: './category-list-page.component.html',
  styleUrl: './category-list-page.component.css',
})
export class CategoryListPageComponent {
  // Bound to the :category router param
  readonly category = input<string>();

  private store = inject(CategoryArticlesStore);

  readonly activeCategory = this.store.category;
  readonly categoryNews = this.store.articles;
  readonly loading = this.store.loading;
  readonly loadingMore = this.store.loadingMore;
  readonly error = this.store.error;
  readonly nextCursor = this.store.nextCursor;

  constructor() {
    effect(() => {
      const slug = this.category();
      if (slug) {
        this.store.load(slug);
      }
    });
  }

  retry(): void {
    const slug = this.category();
    if (slug) {
      this.store.load(slug);
    }
  }

  loadMore(): void {
    this.store.loadMore();
  }

  // Hero news is the first item in the category
  readonly categoryHeroNews = computed(() => {
    const news = this.categoryNews();
    return news.length > 0 ? news[0] : null;
  });

  readonly heroImageUrl = computed(() => {
    const hero = this.categoryHeroNews();
    return hero && hero.multimedia && hero.multimedia.length > 0 ? hero.multimedia[0].url : '';
  });

  // Grid news are the rest (skipping the first item)
  readonly categoryGridNews = computed(() => {
    return this.categoryNews().slice(1);
  });

  // News for sidebar related block
  readonly categorySidebarNews = computed(() => {
    return this.categoryNews().slice(0, 3);
  });
}
