import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionBackComponent } from './competition-back.component';

describe('CompetitionBackComponent', () => {
  let component: CompetitionBackComponent;
  let fixture: ComponentFixture<CompetitionBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitionBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetitionBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
