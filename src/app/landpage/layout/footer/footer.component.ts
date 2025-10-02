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
  email: string = 'contato@volent.com.br';

  matriz = {
    endereco: 'R. Ary Barroso, 70, Sala 716 e 717 - Papicu, Fortaleza - CE',
    cep: '60175-705',
    telefone: '(85) 9601-5923'
  };

  filiais = [
    {
      endereco: 'Av. Pacífico, 731, Sala 603 - Cidade Alpha, Eusébio - CE',
      cep: '61.761-850',
      telefone: '(85) 99900-3739'
    },
    {
      endereco: 'Rua Treze de Maio, 31, Sala 03 - Centro, Campina Grande - PB',
      cep: '58400-290',
      telefone: '(83) 98626-1332'
    }
  ];

  // Social Links
  facebookLink: string = 'https://www.facebook.com/volent';
  instagramLink: string = 'https://www.instagram.com/volent/';
  linkedinLink: string = 'https://www.linkedin.com/company/volent/';
  whatsappLink: string = 'https://wa.me/558596015923';

  // ✅ Ano atual calculado no TS
  currentYear: number = new Date().getFullYear();
}
