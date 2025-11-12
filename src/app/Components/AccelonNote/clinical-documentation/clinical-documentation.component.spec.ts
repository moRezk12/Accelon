import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalDocumentationComponent } from './clinical-documentation.component';

describe('ClinicalDocumentationComponent', () => {
  let component: ClinicalDocumentationComponent;
  let fixture: ComponentFixture<ClinicalDocumentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClinicalDocumentationComponent]
    });
    fixture = TestBed.createComponent(ClinicalDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
