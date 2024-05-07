import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationListBComponent } from './registration-list-b.component';

describe('RegistrationListBComponent', () => {
  let component: RegistrationListBComponent;
  let fixture: ComponentFixture<RegistrationListBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationListBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationListBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
