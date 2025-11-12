import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccelonAuditPageComponent } from './accelon-audit-page.component';

describe('AccelonAuditPageComponent', () => {
  let component: AccelonAuditPageComponent;
  let fixture: ComponentFixture<AccelonAuditPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccelonAuditPageComponent]
    });
    fixture = TestBed.createComponent(AccelonAuditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
