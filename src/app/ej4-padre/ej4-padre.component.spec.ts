import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej4PadreComponent } from './ej4-padre.component';

describe('Ej4PadreComponent', () => {
  let component: Ej4PadreComponent;
  let fixture: ComponentFixture<Ej4PadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ej4PadreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ej4PadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
