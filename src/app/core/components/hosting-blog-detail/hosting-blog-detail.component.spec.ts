import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostingBlogDetailComponent } from './hosting-blog-detail.component';

describe('HostingBlogDetailComponent', () => {
  let component: HostingBlogDetailComponent;
  let fixture: ComponentFixture<HostingBlogDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostingBlogDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostingBlogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
