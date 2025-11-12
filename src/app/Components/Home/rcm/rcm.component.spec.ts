import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RcmComponent } from './rcm.component';

describe('RcmComponent', () => {
  let component: RcmComponent;
  let fixture: ComponentFixture<RcmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RcmComponent]
    });
    fixture = TestBed.createComponent(RcmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
