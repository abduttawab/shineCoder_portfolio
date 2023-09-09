import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCandidateListComponent } from './job-candidate-list.component';

describe('JobCandidateListComponent', () => {
  let component: JobCandidateListComponent;
  let fixture: ComponentFixture<JobCandidateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobCandidateListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobCandidateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
