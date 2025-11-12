import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossIndustryComponent } from './cross-industry.component';

describe('CrossIndustryComponent', () => {
  let component: CrossIndustryComponent;
  let fixture: ComponentFixture<CrossIndustryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrossIndustryComponent]
    });
    fixture = TestBed.createComponent(CrossIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
