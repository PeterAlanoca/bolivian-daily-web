import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MOCK_CATEGORIES, MOCK_NEWS_SIGNAL } from '../../../../core/data/mock-data';
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

  private readonly NACIONAL_CATEGORY_ID = 1;
  private readonly HOME_CATEGORY_IDS = [1, 2, 3, 4, 8, 6];

  private readonly sortedNews = computed(() =>
    [...this.newsList()].sort(
      (first, second) =>
        new Date(second.publication_date).getTime() - new Date(first.publication_date).getTime(),
    ),
  );

  private readonly nacionalNews = computed(() =>
    this.sortedNews().filter((item) => item.category_id === this.NACIONAL_CATEGORY_ID),
  );

  private readonly topFoldNews = computed(() => {
    const nacional = this.nacionalNews();
    if (nacional.length >= 7) {
      return nacional.slice(0, 7);
    }
    const pickedIds = new Set(nacional.map((item) => item.id));
    const fallback = this.sortedNews().filter((item) => !pickedIds.has(item.id));
    return [...nacional, ...fallback].slice(0, 7);
  });

  // Lead Story (latest from Nacional)
  readonly leadNews = computed(() => this.topFoldNews()[0]);

  readonly leadImageUrl = computed(() => {
    const lead = this.leadNews();
    return lead && lead.multimedia && lead.multimedia.length > 0 ? lead.multimedia[0].url : '';
  });

  // Left Column News (next 3 from Nacional top-fold)
  readonly leftColumnNews = computed(() => this.topFoldNews().slice(1, 4));

  // Right Column Recent News (latest 4 from any category, excluding the Nacional top-fold)
  readonly recentNews = computed(() => {
    const excludedIds = new Set(this.topFoldNews().map((item) => item.id));
    return this.sortedNews().filter((item) => !excludedIds.has(item.id)).slice(0, 4);
  });

  private readonly topFoldIds = computed(
    () =>
      new Set(
        [...this.topFoldNews(), ...this.recentNews()].map((item) => item.id),
      ),
  );

  // Fixed home categories in editorial order, fallback to mocks when the store is empty
  readonly homeCategories = computed(() => {
    const stored = this.categories();
    const source = stored.length > 0 ? stored : MOCK_CATEGORIES;
    const byId = new Map(source.map((cat) => [cat.id, cat]));
    return this.HOME_CATEGORY_IDS.filter((id) => byId.has(id)).map((id) => byId.get(id)!);
  });

  // Helper methods
  getCategoryNews(catId: number) {
    const excludedIds = this.topFoldIds();
    return this.sortedNews().filter((n) => n.category_id === catId && !excludedIds.has(n.id));
  }

  getCategoryMainNews(catId: number) {
    const list = this.getCategoryNews(catId);
    return list.length > 0 ? list[0] : null;
  }

  getCategorySideNews(catId: number) {
    // Return up to 8 side stories in the category (skipping the main one)
    return this.getCategoryNews(catId).slice(1, 9);
  }

  itemImageUrl(item: News): string {
    return item.multimedia && item.multimedia.length > 0 ? item.multimedia[0].url : '';
  }
}
