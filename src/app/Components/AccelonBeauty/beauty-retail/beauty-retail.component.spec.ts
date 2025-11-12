import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyRetailComponent } from './beauty-retail.component';

describe('BeautyRetailComponent', () => {
  let component: BeautyRetailComponent;
  let fixture: ComponentFixture<BeautyRetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeautyRetailComponent]
    });
    fixture = TestBed.createComponent(BeautyRetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
