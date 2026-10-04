import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeFeedStore } from '../../data-access/store/home-feed.store';
import { TimeAgoPipe } from '../../../../shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink, TimeAgoPipe],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  private homeFeedStore = inject(HomeFeedStore);
  feed = this.homeFeedStore.feed;
  loading = this.homeFeedStore.loading;
  error = this.homeFeedStore.error;

  retry(): void {
    this.homeFeedStore.load();
  }
}
