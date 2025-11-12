import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccelonVoicePageComponent } from './accelon-voice-page.component';

describe('AccelonVoicePageComponent', () => {
  let component: AccelonVoicePageComponent;
  let fixture: ComponentFixture<AccelonVoicePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccelonVoicePageComponent]
    });
    fixture = TestBed.createComponent(AccelonVoicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
