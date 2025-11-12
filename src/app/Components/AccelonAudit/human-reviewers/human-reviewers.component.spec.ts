import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanReviewersComponent } from './human-reviewers.component';

describe('HumanReviewersComponent', () => {
  let component: HumanReviewersComponent;
  let fixture: ComponentFixture<HumanReviewersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HumanReviewersComponent]
    });
    fixture = TestBed.createComponent(HumanReviewersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
