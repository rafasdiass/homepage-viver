import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [CommonModule],
})
export class FooterComponent {
  email: string = 'atendimento@vivemaiscooperativa.com.br';

  matriz = {
    endereco: 'Rod Salvador de Leone, 2701 - Embu Mirim, Itapecerica da Serra - SP',
    cep: '06853-000',
    telefone: '(11) 99024-0313'
  };


  // Social Links
  instagramLink: string = 'https://www.instagram.com/vivermais.sp';
  youtubeLink: string = 'https://www.youtube.com/@ViverMaisCoop';
  whatsappLink: string = 'https://wa.me/5511990240313';

  // Contact Info
  telefone: string = '+55 11 4210-4648';
  emailLink: string = 'atendimento@vivemaiscooperativa.com.br';

  // ✅ Ano atual calculado no TS
  currentYear: number = new Date().getFullYear();
}
