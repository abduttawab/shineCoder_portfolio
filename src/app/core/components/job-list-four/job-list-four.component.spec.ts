import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListFourComponent } from './job-list-four.component';

describe('JobListFourComponent', () => {
  let component: JobListFourComponent;
  let fixture: ComponentFixture<JobListFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobListFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobListFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
