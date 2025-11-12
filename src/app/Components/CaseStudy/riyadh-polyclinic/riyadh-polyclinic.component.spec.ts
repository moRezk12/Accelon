import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiyadhPolyclinicComponent } from './riyadh-polyclinic.component';

describe('RiyadhPolyclinicComponent', () => {
  let component: RiyadhPolyclinicComponent;
  let fixture: ComponentFixture<RiyadhPolyclinicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiyadhPolyclinicComponent]
    });
    fixture = TestBed.createComponent(RiyadhPolyclinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
