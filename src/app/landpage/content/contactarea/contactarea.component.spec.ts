import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactareaComponent } from './contactarea.component';

describe('ContactareaComponent', () => {
  let component: ContactareaComponent;
  let fixture: ComponentFixture<ContactareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactareaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
