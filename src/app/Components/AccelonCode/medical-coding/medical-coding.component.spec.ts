import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalCodingComponent } from './medical-coding.component';

describe('MedicalCodingComponent', () => {
  let component: MedicalCodingComponent;
  let fixture: ComponentFixture<MedicalCodingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicalCodingComponent]
    });
    fixture = TestBed.createComponent(MedicalCodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
