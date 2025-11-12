import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedPartnersComponent } from './trusted-partners.component';

describe('TrustedPartnersComponent', () => {
  let component: TrustedPartnersComponent;
  let fixture: ComponentFixture<TrustedPartnersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrustedPartnersComponent]
    });
    fixture = TestBed.createComponent(TrustedPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
