import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej4HijoComponent } from './ej4-hijo.component';

describe('Ej4HijoComponent', () => {
  let component: Ej4HijoComponent;
  let fixture: ComponentFixture<Ej4HijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ej4HijoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ej4HijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
