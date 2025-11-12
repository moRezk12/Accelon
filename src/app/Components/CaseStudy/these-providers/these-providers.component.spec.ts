import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheseProvidersComponent } from './these-providers.component';

describe('TheseProvidersComponent', () => {
  let component: TheseProvidersComponent;
  let fixture: ComponentFixture<TheseProvidersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TheseProvidersComponent]
    });
    fixture = TestBed.createComponent(TheseProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
