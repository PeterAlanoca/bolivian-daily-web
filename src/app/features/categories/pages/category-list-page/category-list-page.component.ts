import { Component, input, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MOCK_NEWS_SIGNAL } from '../../../../core/data/mock-data';
import { CategoryStore } from '@core/state/store/category.store';
import { NewsCardComponent } from '../../../news/components/news-card/news-card.component';
import { SidebarComponent } from '../../../news/components/sidebar/sidebar.component';
import { TimeAgoPipe } from '../../../../shared/pipes/time-ago.pipe';

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

  // Global state signals
  newsList = MOCK_NEWS_SIGNAL;
  private categoryStore = inject(CategoryStore);
  categories = this.categoryStore.categories;

  // Find category based on route parameter
  readonly activeCategory = computed(() => {
    const slug = this.category();
    return this.categories().find((cat) => cat.slug === slug) || null;
  });

  // Filter news belonging to the active category
  readonly categoryNews = computed(() => {
    const cat = this.activeCategory();
    if (!cat) return [];
    return this.newsList().filter((news) => news.category_id === cat.id);
  });

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

  // News for sidebar related block (could be other news in this category to display under related, e.g. up to 2 items)
  readonly categorySidebarNews = computed(() => {
    return this.categoryNews().slice(0, 3);
  });
}
