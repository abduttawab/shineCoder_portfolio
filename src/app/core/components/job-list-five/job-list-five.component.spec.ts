import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListFiveComponent } from './job-list-five.component';

describe('JobListFiveComponent', () => {
  let component: JobListFiveComponent;
  let fixture: ComponentFixture<JobListFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobListFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobListFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
