import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccelonBeautyPageComponent } from './accelon-beauty-page.component';

describe('AccelonBeautyPageComponent', () => {
  let component: AccelonBeautyPageComponent;
  let fixture: ComponentFixture<AccelonBeautyPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccelonBeautyPageComponent]
    });
    fixture = TestBed.createComponent(AccelonBeautyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
