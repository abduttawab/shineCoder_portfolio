import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateTeamComponent } from './corporate-team.component';

describe('CorporateTeamComponent', () => {
  let component: CorporateTeamComponent;
  let fixture: ComponentFixture<CorporateTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporateTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
