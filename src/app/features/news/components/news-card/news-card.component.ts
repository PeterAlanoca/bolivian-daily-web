import { Component, input, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { News } from '../../../../core/models/news.model';
import { TimeAgoPipe } from '../../../../shared/pipes/time-ago.pipe';
import { TruncatePipe } from '../../../../shared/pipes/truncate.pipe';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [RouterLink, TimeAgoPipe, TruncatePipe],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.css',
})
export class NewsCardComponent {
  // Signal-based inputs in Angular 19+
  readonly news = input.required<News>();
  readonly type = input<'featured' | 'category-main' | 'list-item' | 'grid-card'>('grid-card');

  // Computed property to extract image URL
  readonly imageUrl = computed(() => {
    const media = this.news().multimedia;
    if (media && media.length > 0) {
      return media[0].url;
    }
    return '';
  });
}
