import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalGroupComponent } from './hospital-group.component';

describe('HospitalGroupComponent', () => {
  let component: HospitalGroupComponent;
  let fixture: ComponentFixture<HospitalGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HospitalGroupComponent]
    });
    fixture = TestBed.createComponent(HospitalGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
