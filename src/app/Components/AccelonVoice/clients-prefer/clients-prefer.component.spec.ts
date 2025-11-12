import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsPreferComponent } from './clients-prefer.component';

describe('ClientsPreferComponent', () => {
  let component: ClientsPreferComponent;
  let fixture: ComponentFixture<ClientsPreferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsPreferComponent]
    });
    fixture = TestBed.createComponent(ClientsPreferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
