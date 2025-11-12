import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalNetworkComponent } from './hospital-network.component';

describe('HospitalNetworkComponent', () => {
  let component: HospitalNetworkComponent;
  let fixture: ComponentFixture<HospitalNetworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HospitalNetworkComponent]
    });
    fixture = TestBed.createComponent(HospitalNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
