import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartbeatComponent } from './heartbeat.component';

describe('HeartbeatComponent', () => {
  let component: HeartbeatComponent;
  let fixture: ComponentFixture<HeartbeatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeartbeatComponent]
    });
    fixture = TestBed.createComponent(HeartbeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
