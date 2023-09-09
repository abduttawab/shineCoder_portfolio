import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostingSharedComponent } from './hosting-shared.component';

describe('HostingSharedComponent', () => {
  let component: HostingSharedComponent;
  let fixture: ComponentFixture<HostingSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostingSharedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostingSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
