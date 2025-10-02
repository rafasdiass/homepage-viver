import { Injectable } from '@angular/core';
import { CarouselItem } from '../../../shared/models/carrossel.model';

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  private autoSlideInterval: ReturnType<typeof setInterval> | null = null;

  constructor() {}

  startAutoSlide(intervalTime: number, nextSlideCallback: () => void): void {
    this.autoSlideInterval = setInterval(() => {
      nextSlideCallback();
    }, intervalTime);
  }

  stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    }
  }

  isVideo(item: CarouselItem): boolean {
    return item.type === 'video';
  }
}
