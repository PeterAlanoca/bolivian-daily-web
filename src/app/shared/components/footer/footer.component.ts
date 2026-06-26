import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MOCK_CATEGORIES_SIGNAL } from '../../../core/data/mock-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer__logo">
          <div class="footer__logo-text">Bolivian Daily</div>
        </div>

        <div class="footer__grid">
          <!-- Secciones Column 1 -->
          <div>
            <div class="footer__col-title">Noticias</div>
            <ul class="footer__col-list">
              @for (cat of firstHalfCategories(); track cat.id) {
                <li>
                  <a [routerLink]="['/', cat.url]">{{ cat.name }}</a>
                </li>
              }
            </ul>
          </div>

          <!-- Secciones Column 2 -->
          <div>
            <div class="footer__col-title">Más Secciones</div>
            <ul class="footer__col-list">
              @for (cat of secondHalfCategories(); track cat.id) {
                <li>
                  <a [routerLink]="['/', cat.url]">{{ cat.name }}</a>
                </li>
              }
            </ul>
          </div>

          <!-- Corporativo -->
          <div>
            <div class="footer__col-title">Corporativo</div>
            <ul class="footer__col-list">
              <li><a href="#">Sobre nosotros</a></li>
              <li><a href="#">Trabaja con nosotros</a></li>
              <li><a href="#">Centro de prensa</a></li>
              <li><a href="#">Publicidad</a></li>
            </ul>
          </div>

          <!-- Términos y Soporte -->
          <div>
            <div class="footer__col-title">Términos</div>
            <ul class="footer__col-list">
              <li><a href="#">Términos de servicio</a></li>
              <li><a href="#">Política de privacidad</a></li>
              <li><a href="#">Preferencias de cookies</a></li>
              <li><a href="#">Soporte de suscripción</a></li>
            </ul>
          </div>

          <!-- Contacto y Redes -->
          <div>
            <div class="footer__col-title">Contacto</div>
            <ul class="footer__col-list">
              <li><a href="#">Contacto editorial</a></li>
              <li><a href="#">Enviar una pista</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">X / Twitter</a></li>
            </ul>
          </div>
        </div>

        <div class="footer__bottom">
          &copy; {{ currentYear }} Bolivian Daily. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  categories = MOCK_CATEGORIES_SIGNAL;
  currentYear = new Date().getFullYear();

  firstHalfCategories = computed(() => {
    const list = this.categories();
    return list.slice(0, Math.ceil(list.length / 2));
  });

  secondHalfCategories = computed(() => {
    const list = this.categories();
    return list.slice(Math.ceil(list.length / 2));
  });
}
