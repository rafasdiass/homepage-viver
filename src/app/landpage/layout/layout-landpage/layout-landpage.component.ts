import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../shared/service/theme.service';
import { RouterOutlet } from '@angular/router';
import { NavbarTopComponent } from '../navbar-top/navbar-top.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { LoadingService } from '../../../shared/service/loading.service';


@Component({
  selector: 'app-layout-landpage',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarTopComponent,
    CommonModule,
  
],
  templateUrl: './layout-landpage.component.html',
  styleUrls: ['./layout-landpage.component.scss'],
})
export class LayoutLandpageComponent implements OnInit {
  loading$: Observable<boolean>;

  constructor(
    private themeService: ThemeService,
    private loadingService: LoadingService
  ) {
    this.loading$ = this.loadingService.isLoading;
  }

  ngOnInit() {
    this.themeService.initTheme();
  }
}
