import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostingCloudComponent } from './hosting-cloud.component';

describe('HostingCloudComponent', () => {
  let component: HostingCloudComponent;
  let fixture: ComponentFixture<HostingCloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostingCloudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostingCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
