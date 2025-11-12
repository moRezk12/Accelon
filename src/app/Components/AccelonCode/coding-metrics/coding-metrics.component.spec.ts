import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingMetricsComponent } from './coding-metrics.component';

describe('CodingMetricsComponent', () => {
  let component: CodingMetricsComponent;
  let fixture: ComponentFixture<CodingMetricsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodingMetricsComponent]
    });
    fixture = TestBed.createComponent(CodingMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
