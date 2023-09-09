import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailThreeComponent } from './job-detail-three.component';

describe('JobDetailThreeComponent', () => {
  let component: JobDetailThreeComponent;
  let fixture: ComponentFixture<JobDetailThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobDetailThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobDetailThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
