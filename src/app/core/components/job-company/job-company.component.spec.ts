import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCompanyComponent } from './job-company.component';

describe('JobCompanyComponent', () => {
  let component: JobCompanyComponent;
  let fixture: ComponentFixture<JobCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
