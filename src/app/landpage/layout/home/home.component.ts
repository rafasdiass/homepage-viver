import { Component, OnInit } from '@angular/core';
import { CarrosselComponent } from "../../content/carrossel/carrossel.component";
import { AboutComponent } from "../../content/about/about.component";
import { CompanyServicesComponent } from "../../content/company-services/company-services.component";
import { ContactareaComponent } from '../../content/contactarea/contactarea.component';
import { ChatRoomComponent } from '../../../chat/chat-room/chat-room.component';

import { FooterComponent } from "../footer/footer.component";
import { CardsComponent } from '../../content/cards/cards.component';
import{ FormularioComponent} from "../../content/formulario/formulario.component"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CarrosselComponent, AboutComponent, CompanyServicesComponent, ContactareaComponent, ChatRoomComponent, FooterComponent, FormularioComponent,CardsComponent],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('HomeComponent initialized!');
  }
}
