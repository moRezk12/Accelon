import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccelonHealthVissionComponent } from './accelon-health-vission.component';

describe('AccelonHealthVissionComponent', () => {
  let component: AccelonHealthVissionComponent;
  let fixture: ComponentFixture<AccelonHealthVissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccelonHealthVissionComponent]
    });
    fixture = TestBed.createComponent(AccelonHealthVissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
