import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccuracyShapedComponent } from './accuracy-shaped.component';

describe('AccuracyShapedComponent', () => {
  let component: AccuracyShapedComponent;
  let fixture: ComponentFixture<AccuracyShapedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccuracyShapedComponent]
    });
    fixture = TestBed.createComponent(AccuracyShapedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
