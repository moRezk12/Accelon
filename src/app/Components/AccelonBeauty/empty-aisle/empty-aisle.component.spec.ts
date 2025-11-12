import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyAisleComponent } from './empty-aisle.component';

describe('EmptyAisleComponent', () => {
  let component: EmptyAisleComponent;
  let fixture: ComponentFixture<EmptyAisleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmptyAisleComponent]
    });
    fixture = TestBed.createComponent(EmptyAisleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
