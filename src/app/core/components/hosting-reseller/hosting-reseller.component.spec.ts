import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostingResellerComponent } from './hosting-reseller.component';

describe('HostingResellerComponent', () => {
  let component: HostingResellerComponent;
  let fixture: ComponentFixture<HostingResellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostingResellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostingResellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
