import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateBlogComponent } from './corporate-blog.component';

describe('CorporateBlogComponent', () => {
  let component: CorporateBlogComponent;
  let fixture: ComponentFixture<CorporateBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporateBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
