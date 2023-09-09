import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopBlogDetailComponent } from './shop-blog-detail.component';

describe('ShopBlogDetailComponent', () => {
  let component: ShopBlogDetailComponent;
  let fixture: ComponentFixture<ShopBlogDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopBlogDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopBlogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
