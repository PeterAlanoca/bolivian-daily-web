import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: string | Date | null | undefined): string {
    if (!value) return '';

    const date = typeof value === 'string' ? new Date(value) : value;
    const now = new Date();
    const elapsed = now.getTime() - date.getTime();

    const seconds = Math.floor(elapsed / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) {
      return 'Hace unos instantes';
    } else if (minutes < 60) {
      return minutes === 1 ? 'Hace 1 minuto' : `Hace ${minutes} minutos`;
    } else if (hours < 24) {
      return hours === 1 ? 'Hace 1 hora' : `Hace ${hours} horas`;
    } else if (days < 30) {
      return days === 1 ? 'Hace 1 día' : `Hace ${days} días`;
    } else {
      // Return formatted date
      return date.toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
    }
  }
}
