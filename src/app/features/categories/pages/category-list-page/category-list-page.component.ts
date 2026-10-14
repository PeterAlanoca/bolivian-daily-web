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

  // Sidebar takes up to 3 articles from the end of the list (the older articles of this section)
  readonly categorySidebarNews = computed(() => {
    const news = this.categoryNews();
    if (news.length >= 6) {
      return news.slice(-3);
    }
    if (news.length === 5) {
      return news.slice(-2);
    }
    if (news.length === 4) {
      return news.slice(-1);
    }
    return [];
  });

  // Grid news maintains a continuous chronological stream following the hero, up until the sidebar items
  readonly categoryGridNews = computed(() => {
    const news = this.categoryNews();
    const sidebarCount = this.categorySidebarNews().length;
    if (sidebarCount === 0) {
      return news.slice(1);
    }
    return news.slice(1, news.length - sidebarCount);
  });

  // IDs of all category articles rendered on the page, to prevent duplicates in the sidebar's recent block
  readonly pageArticleIds = computed(() => {
    return this.categoryNews().map((item) => item.id);
  });
}
