import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostingFaqsComponent } from './hosting-faqs.component';

describe('HostingFaqsComponent', () => {
  let component: HostingFaqsComponent;
  let fixture: ComponentFixture<HostingFaqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostingFaqsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostingFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
