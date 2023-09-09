import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostingDedicatedComponent } from './hosting-dedicated.component';

describe('HostingDedicatedComponent', () => {
  let component: HostingDedicatedComponent;
  let fixture: ComponentFixture<HostingDedicatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostingDedicatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostingDedicatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
