import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthcareArchitectsComponent } from './healthcare-architects.component';

describe('HealthcareArchitectsComponent', () => {
  let component: HealthcareArchitectsComponent;
  let fixture: ComponentFixture<HealthcareArchitectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthcareArchitectsComponent]
    });
    fixture = TestBed.createComponent(HealthcareArchitectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
