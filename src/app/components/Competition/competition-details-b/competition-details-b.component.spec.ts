import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionDetailsBComponent } from './competition-details-b.component';

describe('CompetitionDetailsBComponent', () => {
  let component: CompetitionDetailsBComponent;
  let fixture: ComponentFixture<CompetitionDetailsBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitionDetailsBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetitionDetailsBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
