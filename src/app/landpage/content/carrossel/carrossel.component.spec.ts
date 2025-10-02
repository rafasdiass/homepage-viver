import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarrosselComponent } from './carrossel.component';
import { CarouselService } from './carrossel.service';

describe('CarrosselComponent', () => {
  let component: CarrosselComponent;
  let fixture: ComponentFixture<CarrosselComponent>;
  let carouselServiceSpy: jasmine.SpyObj<CarouselService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('CarouselService', [
      'startAutoSlide',
      'stopAutoSlide',
      'isVideo'
    ]);

    await TestBed.configureTestingModule({
      imports: [CarrosselComponent],
      providers: [{ provide: CarouselService, useValue: spy }]
    }).compileComponents();

    fixture = TestBed.createComponent(CarrosselComponent);
    component = fixture.componentInstance;
    carouselServiceSpy = TestBed.inject(CarouselService) as jasmine.SpyObj<CarouselService>;

    // Configuração padrão do mock
    carouselServiceSpy.isVideo.and.returnValue(false);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call startAutoSlide on init', () => {
    expect(carouselServiceSpy.startAutoSlide).toHaveBeenCalled();
  });
});
