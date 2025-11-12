import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCommunicationComponent } from './patient-communication.component';

describe('PatientCommunicationComponent', () => {
  let component: PatientCommunicationComponent;
  let fixture: ComponentFixture<PatientCommunicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientCommunicationComponent]
    });
    fixture = TestBed.createComponent(PatientCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
