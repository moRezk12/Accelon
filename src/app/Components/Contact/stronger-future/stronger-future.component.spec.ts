import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrongerFutureComponent } from './stronger-future.component';

describe('StrongerFutureComponent', () => {
  let component: StrongerFutureComponent;
  let fixture: ComponentFixture<StrongerFutureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrongerFutureComponent]
    });
    fixture = TestBed.createComponent(StrongerFutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
