import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutLandpageComponent } from './layout-landpage.component';

describe('LayoutLandpageComponent', () => {
  let component: LayoutLandpageComponent;
  let fixture: ComponentFixture<LayoutLandpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutLandpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutLandpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
