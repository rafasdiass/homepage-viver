import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { CarouselService } from './carrossel.service';
import { CarouselItem } from '../../../shared/models/carrossel.model';
import { CommonModule } from '@angular/common';
import { CarouselIndicatorsComponent } from './carousel-indicators/carousel-indicators.component';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.scss'],
  standalone: true,
  imports: [CommonModule, CarouselIndicatorsComponent],
})
export class CarrosselComponent implements OnInit, AfterViewInit, OnDestroy {
  currentIndex = 0;
  slideIntervalTime = 5000;
  loading: boolean = true;

  items: CarouselItem[] = [
    {
      id: 1,
      title: 'Banner 1',
      type: 'image',
      src: '/assets/imagens/Sample Work (5).jpg',
    },
    {
      id: 2,
      title: 'Item 2',
      type: 'image',
      src: '/assets/imagens/Sample Work (6).jpg',
    },
    { id: 3, title: 'Item 3', type: 'image', src: '/assets/imagens/Sample Work (10).jpg' },
    
    {
      id: 4,
      title: 'Banner 2',
      type: 'image',
      src: '/assets/imagens/Sample Work (7).jpg',
    },
    {
      id: 5,
      title: 'Banner 3',
      type: 'image',
      src: '/assets/imagens/Sample Work (10).jpg',
    },
    {
      id: 6,
      title: 'Banner 4',
      type: 'image',
      src: '/assets/imagens/Sample Work (8).jpg',
    },
    {
      id: 7,
      title: 'Banner 5',
      type: 'image',
      src: '/assets/imagens/Sample Work (13).jpg',
    },
    {
      id: 8,
      title: 'Banner 6',
      type: 'image',
      src: '/assets/imagens/Sample Work (18).jpg',
    },
  ];

  constructor(
    private carouselService: CarouselService,
    private elRef: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.preloadItems().then(() => {
      this.carouselService.startAutoSlide(this.slideIntervalTime, () =>
        this.nextSlide()
      );
      this.applyParallaxEffect();
      this.loading = false;
      this.tryPlayVideo();
    });
  }

  ngAfterViewInit(): void {
    this.tryPlayVideo();
  }

  ngOnDestroy(): void {
    this.carouselService.stopAutoSlide();
  }

  async preloadItems(): Promise<void> {
    const promises = this.items.map((item) => {
      return new Promise<void>((resolve) => {
        if (item.type === 'image') {
          const img = new Image();
          img.src = item.src;
          img.onload = () => resolve();
          img.onerror = () => resolve();
        } else if (item.type === 'video') {
          const video = document.createElement('video');
          video.src = item.src;
          video.onloadedmetadata = () => resolve();
          video.onerror = () => resolve();
        } else {
          resolve();
        }
      });
    });
    await Promise.all(promises);
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.tryPlayVideo();
  }

  prevSlide(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.tryPlayVideo();
  }

  setSlide(index: number): void {
    this.currentIndex = index;
    this.resetAutoSlide();
    this.tryPlayVideo();
  }

  resetAutoSlide(): void {
    this.carouselService.stopAutoSlide();
    this.carouselService.startAutoSlide(this.slideIntervalTime, () =>
      this.nextSlide()
    );
  }

  isVideo(item: CarouselItem): boolean {
    return this.carouselService.isVideo(item);
  }

  applyParallaxEffect(): void {
    this.renderer.listen('window', 'scroll', () => {
      const scrollPosition = window.pageYOffset;
      const carouselItems: NodeListOf<HTMLElement> =
        this.elRef.nativeElement.querySelectorAll('.carousel-item');
      carouselItems.forEach((item: HTMLElement) => {
        const speed = 0.5;
        const offset = scrollPosition * speed;
        this.renderer.setStyle(item, 'transform', `translateY(${offset}px)`);
      });
    });
  }

  tryPlayVideo(): void {
    if (this.isVideo(this.items[this.currentIndex])) {
      setTimeout(() => {
        const videoElement: HTMLVideoElement | null =
          this.elRef.nativeElement.querySelector('.carousel-item.active video');
        if (videoElement) {
          videoElement
            .play()
            .then(() => {
              console.log('Vídeo reproduzido automaticamente.');
            })
            .catch((error) => {
              console.log('Erro ao tentar reproduzir o vídeo:', error);
            });
        }
      }, 0);
    }
  }

  onVideoLoaded(): void {
    console.log('Vídeo carregado com sucesso.');
  }

  onVideoError(event: Event): void {
    console.error('Erro ao carregar o vídeo:', event);
  }
}
