import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteRevenueComponent } from './complete-revenue.component';

describe('CompleteRevenueComponent', () => {
  let component: CompleteRevenueComponent;
  let fixture: ComponentFixture<CompleteRevenueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompleteRevenueComponent]
    });
    fixture = TestBed.createComponent(CompleteRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
