import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcellenceComponent } from './excellence.component';

describe('ExcellenceComponent', () => {
  let component: ExcellenceComponent;
  let fixture: ComponentFixture<ExcellenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcellenceComponent]
    });
    fixture = TestBed.createComponent(ExcellenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
