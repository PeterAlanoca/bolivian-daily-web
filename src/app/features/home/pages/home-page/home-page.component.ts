import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MOCK_NEWS_SIGNAL } from '../../../../core/data/mock-data';
import { CategoryStore } from '@core/state/store/category.store';
import { News } from '../../../../core/models/news.model';
import { TimeAgoPipe } from '../../../../shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink, TimeAgoPipe],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  newsList = MOCK_NEWS_SIGNAL;
  private categoryStore = inject(CategoryStore);
  categories = this.categoryStore.categories;

  // Lead Story (News 1)
  readonly leadNews = computed(() => this.newsList()[0]);

  readonly leadImageUrl = computed(() => {
    const lead = this.leadNews();
    return lead && lead.multimedia && lead.multimedia.length > 0 ? lead.multimedia[0].url : '';
  });

  // Left Column News (News 4, 5, 6 - to avoid duplication)
  readonly leftColumnNews = computed(() => this.newsList().slice(3, 6));

  // Right Column Opinions (News 2, 7, 9)
  readonly opinionNews = computed(() => {
    const list = this.newsList();
    return [list[1], list[6], list[8]].filter(Boolean);
  });

  // Active categories for the modular buckets
  readonly activeCategories = computed(() => {
    return this.categories().filter((cat) => this.newsList().some((news) => news.category_id === cat.id));
  });

  // Helper methods
  getCategoryNews(catId: number) {
    return this.newsList().filter((n) => n.category_id === catId);
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
