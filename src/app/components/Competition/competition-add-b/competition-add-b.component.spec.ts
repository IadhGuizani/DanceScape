import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionAddBComponent } from './competition-add-b.component';

describe('CompetitionAddBComponent', () => {
  let component: CompetitionAddBComponent;
  let fixture: ComponentFixture<CompetitionAddBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitionAddBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetitionAddBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
