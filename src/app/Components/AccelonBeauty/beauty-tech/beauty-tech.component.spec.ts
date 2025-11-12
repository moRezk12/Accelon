import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyTechComponent } from './beauty-tech.component';

describe('BeautyTechComponent', () => {
  let component: BeautyTechComponent;
  let fixture: ComponentFixture<BeautyTechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeautyTechComponent]
    });
    fixture = TestBed.createComponent(BeautyTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
