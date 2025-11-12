import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeeplyLocalComponent } from './deeply-local.component';

describe('DeeplyLocalComponent', () => {
  let component: DeeplyLocalComponent;
  let fixture: ComponentFixture<DeeplyLocalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeeplyLocalComponent]
    });
    fixture = TestBed.createComponent(DeeplyLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
