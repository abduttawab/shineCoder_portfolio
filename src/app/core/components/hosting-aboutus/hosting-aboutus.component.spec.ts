import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostingAboutusComponent } from './hosting-aboutus.component';

describe('HostingAboutusComponent', () => {
  let component: HostingAboutusComponent;
  let fixture: ComponentFixture<HostingAboutusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostingAboutusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostingAboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
