import { Component, signal, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CategoryStore } from '@core/state/store/category.store';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private categoryStore = inject(CategoryStore);
  categories = this.categoryStore.categories;
  readonly isMenuOpen = signal(false);

  readonly formattedDate = computed(() => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
    };
    const today = new Date();
    // e.g. "Vie, 26 jun"
    return today.toLocaleDateString('es-ES', options).replace('.', '');
  });

  toggleMenu() {
    this.isMenuOpen.update((val) => !val);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
