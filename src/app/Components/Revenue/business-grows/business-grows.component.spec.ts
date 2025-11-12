import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessGrowsComponent } from './business-grows.component';

describe('BusinessGrowsComponent', () => {
  let component: BusinessGrowsComponent;
  let fixture: ComponentFixture<BusinessGrowsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessGrowsComponent]
    });
    fixture = TestBed.createComponent(BusinessGrowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
