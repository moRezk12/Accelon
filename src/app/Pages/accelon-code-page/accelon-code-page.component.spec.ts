import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccelonCodePageComponent } from './accelon-code-page.component';

describe('AccelonCodePageComponent', () => {
  let component: AccelonCodePageComponent;
  let fixture: ComponentFixture<AccelonCodePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccelonCodePageComponent]
    });
    fixture = TestBed.createComponent(AccelonCodePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
