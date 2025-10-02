import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private navbarState = new BehaviorSubject<boolean>(false);
  navbarState$ = this.navbarState.asObservable();

  /** Abre ou fecha a navbar */
  toggleNavbar(): void {
    this.navbarState.next(!this.navbarState.value);
  }

  /** Fecha a navbar */
  closeNavbar(): void {
    this.navbarState.next(false);
  }

  /** Abre a navbar */
  openNavbar(): void {
    this.navbarState.next(true);
  }
}
