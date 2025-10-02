// src/app/landpage/layout/home/home.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// CORREÇÃO DOS IMPORTS - use caminhos absolutos ou relativos corretos
import { CarrosselComponent } from '../../content/carrossel/carrossel.component';
import { AboutComponent } from '../../content/about/about.component';
import { CompanyServicesComponent } from '../../content/company-services/company-services.component';
import { ContactAreaComponent } from '../../content/contactarea/contactarea.component';
import { ChatRoomComponent } from '../../../chat/chat-room/chat-room.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { FormularioComponent } from '../../content/formulario/formulario.component';
import { CardsComponent } from '../../content/cards/cards.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CarrosselComponent,
    AboutComponent,
    CompanyServicesComponent,
    ContactAreaComponent,
    ChatRoomComponent,
    FooterComponent,
    FormularioComponent,
    CardsComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}