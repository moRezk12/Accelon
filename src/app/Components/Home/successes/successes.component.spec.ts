import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessesComponent } from './successes.component';

describe('SuccessesComponent', () => {
  let component: SuccessesComponent;
  let fixture: ComponentFixture<SuccessesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessesComponent]
    });
    fixture = TestBed.createComponent(SuccessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
