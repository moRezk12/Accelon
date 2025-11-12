import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalContactCenterPageComponent } from './medical-contact-center-page.component';

describe('MedicalContactCenterPageComponent', () => {
  let component: MedicalContactCenterPageComponent;
  let fixture: ComponentFixture<MedicalContactCenterPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicalContactCenterPageComponent]
    });
    fixture = TestBed.createComponent(MedicalContactCenterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
