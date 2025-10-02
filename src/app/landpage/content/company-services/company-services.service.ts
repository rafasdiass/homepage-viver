import { Injectable } from '@angular/core';
import { SolutionItem } from '../../../shared/models/solution.model';

@Injectable({
  providedIn: 'root',
})
export class CompanyServicesService {
  items: SolutionItem[] = [
    {
      id: 1,
      title: 'Arquitetura Residencial',
      type: 'image',
      src: '../../assets/imagens/image1.png',
    },
    {
      id: 2,
      title: 'Arquitetura Comercial',
      type: 'image',
      src: '../../assets/imagens/image2.png',
    },
    {
      id: 3,
      title: 'Arquitetura Corporativa',
      type: 'image',
      src: '../../assets/imagens/image3.png',
    },
    {
      id: 4,
      title: 'Projetos de Estrutura',
      type: 'image',
      src: '../../assets/imagens/image9.png',
    },
    {
      id: 5,
      title: 'Projetos Hidrossanitários',
      type: 'image',
      src: '../../assets/imagens/image5.png',
    },
    {
      id: 6,
      title: 'Projetos Elétricos',
      type: 'image',
      src: '../../assets/imagens/image6.png',
    },
    {
      id: 7,
      title: 'PGRCC',
      type: 'image',
      src: '../../assets/imagens/image7.png',
    },
    {
      id: 8,
      title: 'Gestão de Obra',
      type: 'image',
      src: '../../assets/imagens/image8.png',
    }
  ];
}
