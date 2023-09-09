import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostingBlogComponent } from './hosting-blog.component';

describe('HostingBlogComponent', () => {
  let component: HostingBlogComponent;
  let fixture: ComponentFixture<HostingBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostingBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostingBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
