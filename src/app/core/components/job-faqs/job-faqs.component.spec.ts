import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobFaqsComponent } from './job-faqs.component';

describe('JobFaqsComponent', () => {
  let component: JobFaqsComponent;
  let fixture: ComponentFixture<JobFaqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobFaqsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
