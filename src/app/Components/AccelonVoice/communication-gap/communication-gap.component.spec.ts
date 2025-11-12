import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationGapComponent } from './communication-gap.component';

describe('CommunicationGapComponent', () => {
  let component: CommunicationGapComponent;
  let fixture: ComponentFixture<CommunicationGapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommunicationGapComponent]
    });
    fixture = TestBed.createComponent(CommunicationGapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
