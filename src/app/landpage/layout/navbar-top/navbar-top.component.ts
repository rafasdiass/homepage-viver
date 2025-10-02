// src/app/components/navbar-top/navbar-top.component.ts
import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarService } from '../../../shared/service/navbar.service';
import { NavigationService } from '../../../shared/service/navigation.service';
import { ThemeService } from '../../../shared/service/theme.service';

import { MatIcon } from "@angular/material/icon";
import { MatMenu, MatMenuTrigger } from "@angular/material/menu";
import { MatToolbar } from "@angular/material/toolbar";
import { MatDivider } from "@angular/material/divider";

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIcon, MatMenu, MatToolbar, MatMenuTrigger, MatDivider],
})
export class NavbarTopComponent implements OnInit {
  navbarOpen = false;

  constructor(
    private navbarService: NavbarService,
    private navigationService: NavigationService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    // Estado da navbar
    this.navbarService.navbarState$.subscribe((state) => {
      this.navbarOpen = state;
    });
  }

  navegarPara(secaoId: string, event: Event) {
    event.preventDefault();

    if (secaoId === 'login') {
      this.navigationService.navigateToRoute('/login');
    } else if (secaoId === 'lacet-express' || secaoId === 'macenaria') {
      this.navigationService.navigateToRoute(`/${secaoId}`);
    } else {
      this.navigationService.navigateToSection(secaoId);
    }

    this.navbarService.closeNavbar();
  }

  toggleNavbar() {
    this.navbarService.toggleNavbar();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.navbar-top')) {
      this.navbarService.closeNavbar();
    }
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
