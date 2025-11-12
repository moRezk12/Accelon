import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueheroComponent } from './revenuehero.component';

describe('RevenueheroComponent', () => {
  let component: RevenueheroComponent;
  let fixture: ComponentFixture<RevenueheroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RevenueheroComponent]
    });
    fixture = TestBed.createComponent(RevenueheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
