import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurStandardsComponent } from './our-standards.component';

describe('OurStandardsComponent', () => {
  let component: OurStandardsComponent;
  let fixture: ComponentFixture<OurStandardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurStandardsComponent]
    });
    fixture = TestBed.createComponent(OurStandardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
