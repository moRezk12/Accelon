import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeGrowthComponent } from './practice-growth.component';

describe('PracticeGrowthComponent', () => {
  let component: PracticeGrowthComponent;
  let fixture: ComponentFixture<PracticeGrowthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PracticeGrowthComponent]
    });
    fixture = TestBed.createComponent(PracticeGrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
