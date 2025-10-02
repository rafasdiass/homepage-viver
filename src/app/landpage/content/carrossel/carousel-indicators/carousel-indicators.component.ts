import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CarouselItem } from '../../../../shared/models/carrossel.model';

@Component({
  selector: 'app-carousel-indicators',
  standalone: true,
  templateUrl: './carousel-indicators.component.html',
  styleUrls: ['./carousel-indicators.component.scss'],
  imports: [CommonModule],
})
export class CarouselIndicatorsComponent {
  @Input() items: CarouselItem[] = [];
  @Input() currentIndex: number = 0;
  @Input() setSlide!: (index: number) => void;

  onIndicatorClick(index: number): void {
    if (this.setSlide) {
      this.setSlide(index);
    }
  }
}
