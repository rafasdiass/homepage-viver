// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from './landpage/layout/footer/footer.component';
import { LayoutLandpageComponent } from './landpage/layout/layout-landpage/layout-landpage.component';
import { NavbarTopComponent } from './landpage/layout/navbar-top/navbar-top.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,

    FooterComponent,
    LayoutLandpageComponent,
    NavbarTopComponent,


  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'front-orcamento';

  // Injetar o ScrollPositionService no construtor
  constructor() { }
}
