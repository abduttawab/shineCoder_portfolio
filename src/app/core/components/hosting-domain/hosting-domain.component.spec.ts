import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostingDomainComponent } from './hosting-domain.component';

describe('HostingDomainComponent', () => {
  let component: HostingDomainComponent;
  let fixture: ComponentFixture<HostingDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostingDomainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostingDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
