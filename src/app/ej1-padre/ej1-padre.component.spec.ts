import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej1PadreComponent } from './ej1-padre.component';

describe('Ej1PadreComponent', () => {
  let component: Ej1PadreComponent;
  let fixture: ComponentFixture<Ej1PadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ej1PadreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ej1PadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
