import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLeftSidebarPostComponent } from './blog-left-sidebar-post.component';

describe('BlogLeftSidebarPostComponent', () => {
  let component: BlogLeftSidebarPostComponent;
  let fixture: ComponentFixture<BlogLeftSidebarPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogLeftSidebarPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogLeftSidebarPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
