import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustGradeComponent } from './trust-grade.component';

describe('TrustGradeComponent', () => {
  let component: TrustGradeComponent;
  let fixture: ComponentFixture<TrustGradeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrustGradeComponent]
    });
    fixture = TestBed.createComponent(TrustGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
