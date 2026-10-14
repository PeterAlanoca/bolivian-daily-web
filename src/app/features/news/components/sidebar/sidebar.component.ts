import { Component, input, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { News } from '@core/models/news.model';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';
import { RecentArticlesStore } from '../../data-access/store/recent-articles.store';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, TimeAgoPipe],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  private recentStore = inject(RecentArticlesStore);

  // Input for related news
  readonly relatedNews = input<News[]>([]);

  // Recent news from the dedicated recent articles store
  readonly recentNews = this.recentStore.articles;
  readonly loading = this.recentStore.loading;
  readonly error = this.recentStore.error;

  // Computed helper signals
  readonly hasRelated = computed(() => this.relatedNews() && this.relatedNews().length > 0);

  readonly categoryName = computed(() => {
    const list = this.relatedNews();
    if (list && list.length > 0) {
      return list[0].category?.name || 'la sección';
    }
    return 'la sección';
  });

  retry(): void {
    this.recentStore.load();
  }

  itemImageUrl(item: News): string {
    return item.multimedia && item.multimedia.length > 0 ? item.multimedia[0].url : '';
  }
}


