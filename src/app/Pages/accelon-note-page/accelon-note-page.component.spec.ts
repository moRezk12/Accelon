import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccelonNotePageComponent } from './accelon-note-page.component';

describe('AccelonNotePageComponent', () => {
  let component: AccelonNotePageComponent;
  let fixture: ComponentFixture<AccelonNotePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccelonNotePageComponent]
    });
    fixture = TestBed.createComponent(AccelonNotePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
