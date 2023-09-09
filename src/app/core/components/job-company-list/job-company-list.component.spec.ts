import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCompanyListComponent } from './job-company-list.component';

describe('JobCompanyListComponent', () => {
  let component: JobCompanyListComponent;
  let fixture: ComponentFixture<JobCompanyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobCompanyListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobCompanyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
