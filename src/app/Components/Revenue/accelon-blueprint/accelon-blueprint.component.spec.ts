import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccelonBlueprintComponent } from './accelon-blueprint.component';

describe('AccelonBlueprintComponent', () => {
  let component: AccelonBlueprintComponent;
  let fixture: ComponentFixture<AccelonBlueprintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccelonBlueprintComponent]
    });
    fixture = TestBed.createComponent(AccelonBlueprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
