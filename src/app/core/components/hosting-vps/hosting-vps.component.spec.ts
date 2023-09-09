import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostingVpsComponent } from './hosting-vps.component';

describe('HostingVpsComponent', () => {
  let component: HostingVpsComponent;
  let fixture: ComponentFixture<HostingVpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostingVpsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostingVpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
