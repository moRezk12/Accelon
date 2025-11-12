import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluentInBusinessComponent } from './fluent-in-business.component';

describe('FluentInBusinessComponent', () => {
  let component: FluentInBusinessComponent;
  let fixture: ComponentFixture<FluentInBusinessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FluentInBusinessComponent]
    });
    fixture = TestBed.createComponent(FluentInBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
