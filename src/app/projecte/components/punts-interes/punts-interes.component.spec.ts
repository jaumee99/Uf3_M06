import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntsInteresComponent } from './punts-interes.component';

describe('PuntsInteresComponent', () => {
  let component: PuntsInteresComponent;
  let fixture: ComponentFixture<PuntsInteresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PuntsInteresComponent]
    });
    fixture = TestBed.createComponent(PuntsInteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
