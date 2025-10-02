import { Component, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionItem } from '../../../../shared/models/solution.model';
import { Carousel } from 'bootstrap';

@Component({
  selector: 'app-company-carousel',
  standalone: true,
  templateUrl: './company-carousel.component.html',
  styleUrls: ['./company-carousel.component.scss'],
  imports: [CommonModule],
})
export class CompanyCarouselComponent implements AfterViewInit {
  @Input() solutions: SolutionItem[] = [];
  @ViewChild('companycarousel', { static: false }) companycarousel!: ElementRef;

  ngAfterViewInit(): void {
    const carouselElement = this.companycarousel.nativeElement;

    if (carouselElement) {
      const carouselInstance = new Carousel(carouselElement, {
        interval: 5000, // Define o tempo entre slides
        wrap: true, // Habilita loop no carrossel
        ride: 'carousel',
      });
      carouselInstance.cycle(); // Garante que o carrossel comece a se mover
    }
  }

  moveToSlide(index: number): void {
    const carouselElement = this.companycarousel.nativeElement;
    const carouselInstance = Carousel.getInstance(carouselElement);

    if (carouselInstance) {
      carouselInstance.to(index);
    }
  }
}
