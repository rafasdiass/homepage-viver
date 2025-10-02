import { Injectable } from '@angular/core';
import { Router, Scroll, Event } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ScrollPositionService {
  private positions: { [key: string]: number } = {}; // Tipagem correta para as posições de rolagem

  constructor(private router: Router) {
    // Salva a posição de rolagem atual antes de mudar de rota
    this.router.events.pipe(
      filter((e: Event): e is Scroll => e instanceof Scroll) // Filtra apenas eventos do tipo Scroll
    ).subscribe((e: Scroll) => {
      if (e.position) {
        // Se estamos "pulando de volta" para uma posição, não precisamos salvar
        return;
      }
      // Salva a posição atual da rolagem para a rota atual
      this.positions[this.router.url] = window.scrollY;
    });

    // Restaura a posição de rolagem quando a rota é ativada
    this.router.events.pipe(
      filter((e: Event): e is Scroll => e instanceof Scroll) // Filtra apenas eventos do tipo Scroll
    ).subscribe((e: Scroll) => {
      if (e.position) {
        // Se temos uma posição armazenada para "pular de volta", usamos ela
        window.scrollTo({ top: e.position[1] });
        return;
      }
      // Se não, restauramos a posição de rolagem da rota ou movemos para o topo
      window.scrollTo({ top: this.positions[e.routerEvent.url] || 0 });
    });
  }
}
