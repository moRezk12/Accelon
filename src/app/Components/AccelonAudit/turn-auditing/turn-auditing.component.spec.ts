import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnAuditingComponent } from './turn-auditing.component';

describe('TurnAuditingComponent', () => {
  let component: TurnAuditingComponent;
  let fixture: ComponentFixture<TurnAuditingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TurnAuditingComponent]
    });
    fixture = TestBed.createComponent(TurnAuditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
