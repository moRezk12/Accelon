import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthcareConsultingPageComponent } from './healthcare-consulting-page.component';

describe('HealthcareConsultingPageComponent', () => {
  let component: HealthcareConsultingPageComponent;
  let fixture: ComponentFixture<HealthcareConsultingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthcareConsultingPageComponent]
    });
    fixture = TestBed.createComponent(HealthcareConsultingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
