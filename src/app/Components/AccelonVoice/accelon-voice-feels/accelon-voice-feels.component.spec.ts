import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccelonVoiceFeelsComponent } from './accelon-voice-feels.component';

describe('AccelonVoiceFeelsComponent', () => {
  let component: AccelonVoiceFeelsComponent;
  let fixture: ComponentFixture<AccelonVoiceFeelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccelonVoiceFeelsComponent]
    });
    fixture = TestBed.createComponent(AccelonVoiceFeelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
