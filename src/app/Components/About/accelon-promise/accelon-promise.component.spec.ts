import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccelonPromiseComponent } from './accelon-promise.component';

describe('AccelonPromiseComponent', () => {
  let component: AccelonPromiseComponent;
  let fixture: ComponentFixture<AccelonPromiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccelonPromiseComponent]
    });
    fixture = TestBed.createComponent(AccelonPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
