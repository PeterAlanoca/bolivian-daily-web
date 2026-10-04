import { Component, input, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { News } from '../../../../core/models/news.model';
import { MOCK_MOST_READ } from '../../../../core/data/mock-data';
import { TimeAgoPipe } from '../../../../shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, TimeAgoPipe],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  // Input for related news
  readonly relatedNews = input<News[]>([]);

  // Local state signals
  mostRead = MOCK_MOST_READ;

  // Computed helper signals
  readonly hasRelated = computed(() => this.relatedNews() && this.relatedNews().length > 0);

  readonly categoryName = computed(() => {
    const list = this.relatedNews();
    if (list && list.length > 0) {
      return list[0].category?.name || 'la sección';
    }
    return 'la sección';
  });

  itemImageUrl(item: News): string {
    return item.multimedia && item.multimedia.length > 0 ? item.multimedia[0].url : '';
  }
}
