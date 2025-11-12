import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltforHealthcareComponent } from './builtfor-healthcare.component';

describe('BuiltforHealthcareComponent', () => {
  let component: BuiltforHealthcareComponent;
  let fixture: ComponentFixture<BuiltforHealthcareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuiltforHealthcareComponent]
    });
    fixture = TestBed.createComponent(BuiltforHealthcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
