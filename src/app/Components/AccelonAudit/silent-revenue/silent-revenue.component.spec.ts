import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilentRevenueComponent } from './silent-revenue.component';

describe('SilentRevenueComponent', () => {
  let component: SilentRevenueComponent;
  let fixture: ComponentFixture<SilentRevenueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SilentRevenueComponent]
    });
    fixture = TestBed.createComponent(SilentRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
