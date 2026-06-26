import { Component, signal, computed } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MOCK_CATEGORIES_SIGNAL } from '../../../core/data/mock-data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="masthead">
      <div class="container">
        <div class="masthead__inner">
          
          <!-- LEFT SIDE: Hamburger -->
          <div class="masthead__left">
            <button 
              class="masthead__hamburger-btn" 
              (click)="toggleMenu()" 
              aria-label="Abrir menú de secciones"
              [attr.aria-expanded]="isMenuOpen()"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          <!-- CENTER SIDE: Logo -->
          <div class="masthead__center">
            <a routerLink="/" class="masthead__logo-link">
              <div class="masthead__logo-text">Bolivian Daily</div>
            </a>
          </div>

          <!-- RIGHT SIDE: Date -->
          <div class="masthead__right">
            <span class="top-bar__date" style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--gray-dark); display: inline-block;">
              {{ formattedDate() }}
            </span>
          </div>

        </div>
      </div>

      <!-- DESKTOP SECTIONS NAVIGATION -->
      <nav class="main-nav" aria-label="Navegación principal">
        <div class="container">
          <ul class="main-nav__list">
            <li class="main-nav__item">
              <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Inicio</a>
            </li>
            @for (cat of categories(); track cat.id) {
              <li class="main-nav__item">
                <a [routerLink]="['/', cat.url]" routerLinkActive="active">{{ cat.name }}</a>
              </li>
            }
          </ul>
        </div>
      </nav>
    </header>

    <!-- MOBILE MENU DRAWER -->
    <div class="mobile-menu" [class.active]="isMenuOpen()">
      <div class="mobile-menu__overlay" (click)="closeMenu()"></div>
      <div class="mobile-menu__content">
        <div class="mobile-menu__header">
          <div class="masthead__logo-text" style="font-size: 24px;">Bolivian Daily</div>
          <button class="mobile-menu__close" (click)="closeMenu()" aria-label="Cerrar menú">&times;</button>
        </div>
        <ul class="mobile-menu__list">
          <li class="mobile-menu__item">
            <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeMenu()">Inicio</a>
          </li>
          @for (cat of categories(); track cat.id) {
            <li class="mobile-menu__item">
              <a [routerLink]="['/', cat.url]" routerLinkActive="active" (click)="closeMenu()">{{ cat.name }}</a>
            </li>
          }
        </ul>
      </div>
    </div>
  `
})
export class HeaderComponent {
  categories = MOCK_CATEGORIES_SIGNAL;
  isMenuOpen = signal(false);

  formattedDate = computed(() => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      day: 'numeric',
      month: 'short'
    };
    const today = new Date();
    // e.g. "Vie, 26 jun"
    return today.toLocaleDateString('es-ES', options).replace('.', '');
  });

  toggleMenu() {
    this.isMenuOpen.update(val => !val);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
