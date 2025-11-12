import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoweredByAiComponent } from './powered-by-ai.component';

describe('PoweredByAiComponent', () => {
  let component: PoweredByAiComponent;
  let fixture: ComponentFixture<PoweredByAiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoweredByAiComponent]
    });
    fixture = TestBed.createComponent(PoweredByAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
