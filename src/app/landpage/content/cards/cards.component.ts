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
    { title: 'Arquitetura Residencial', icon: 'bi-house' },
    { title: 'Arquitetura Comercial', icon: 'bi-building' },
    { title: 'Arquitetura Corporativa', icon: 'bi-briefcase' },
    { title: 'Projetos de Estrutura', icon: 'bi-gear' },
    { title: 'Projetos Hidrossanitários', icon: 'bi-water' },
    { title: 'Projetos Elétricos', icon: 'bi-lightning' },
    { title: 'PGRCC', icon: 'bi-archive' },
    { title: 'Gestão de Obra', icon: 'bi-tools' },
  ];
}
