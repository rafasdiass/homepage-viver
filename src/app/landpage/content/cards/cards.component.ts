import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  imports: [CommonModule],
})
export class CardsComponent {
  cardItems = [
    { title: 'Cooperativismo Habitacional', icon: 'bi-people' },
    { title: 'Empreendimentos Residenciais', icon: 'bi-house' },
    { title: 'Assessoria Completa', icon: 'bi-clipboard-check' },
    { title: 'Financiamento e Crédito', icon: 'bi-currency-dollar' },
    { title: 'Documentação e Legalização', icon: 'bi-file-earmark-text' },
    { title: 'Acompanhamento Personalizado', icon: 'bi-person-check' },
    { title: 'Entrega das Chaves', icon: 'bi-key' },
    { title: 'Pós-Entrega', icon: 'bi-house-check' },
  ];
}
