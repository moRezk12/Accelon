import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccelonDifferenceComponent } from './accelon-difference.component';

describe('AccelonDifferenceComponent', () => {
  let component: AccelonDifferenceComponent;
  let fixture: ComponentFixture<AccelonDifferenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccelonDifferenceComponent]
    });
    fixture = TestBed.createComponent(AccelonDifferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
