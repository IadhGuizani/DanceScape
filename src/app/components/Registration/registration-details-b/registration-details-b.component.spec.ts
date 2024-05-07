import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationDetailsBComponent } from './registration-details-b.component';

describe('RegistrationDetailsBComponent', () => {
  let component: RegistrationDetailsBComponent;
  let fixture: ComponentFixture<RegistrationDetailsBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationDetailsBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationDetailsBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
