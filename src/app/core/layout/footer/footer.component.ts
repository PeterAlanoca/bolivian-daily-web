import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoryStore } from '@core/state/store/category.store';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  private categoryStore = inject(CategoryStore);
  categories = this.categoryStore.categories;
  currentYear = new Date().getFullYear();

  readonly firstHalfCategories = computed(() => {
    const list = this.categories();
    return list.slice(0, Math.ceil(list.length / 2));
  });

  readonly secondHalfCategories = computed(() => {
    const list = this.categories();
    return list.slice(Math.ceil(list.length / 2));
  });
}
