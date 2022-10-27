import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamTagComponent } from './team-tag.component';

describe('TeamTagComponent', () => {
  let component: TeamTagComponent;
  let fixture: ComponentFixture<TeamTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
