import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudiesPageComponent } from './case-studies-page.component';

describe('CaseStudiesPageComponent', () => {
  let component: CaseStudiesPageComponent;
  let fixture: ComponentFixture<CaseStudiesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaseStudiesPageComponent]
    });
    fixture = TestBed.createComponent(CaseStudiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
