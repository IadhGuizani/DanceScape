import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionListBComponent } from './competition-list-b.component';

describe('CompetitionListBComponent', () => {
  let component: CompetitionListBComponent;
  let fixture: ComponentFixture<CompetitionListBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitionListBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetitionListBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
