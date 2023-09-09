import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListThreeComponent } from './job-list-three.component';

describe('JobListThreeComponent', () => {
  let component: JobListThreeComponent;
  let fixture: ComponentFixture<JobListThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobListThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobListThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
