import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAboutComponent } from './job-about.component';

describe('JobAboutComponent', () => {
  let component: JobAboutComponent;
  let fixture: ComponentFixture<JobAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
