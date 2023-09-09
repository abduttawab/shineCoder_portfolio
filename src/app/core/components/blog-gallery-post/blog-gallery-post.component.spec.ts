import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogGalleryPostComponent } from './blog-gallery-post.component';

describe('BlogGalleryPostComponent', () => {
  let component: BlogGalleryPostComponent;
  let fixture: ComponentFixture<BlogGalleryPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogGalleryPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogGalleryPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
