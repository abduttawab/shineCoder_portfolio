import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateBlogDetailComponent } from './corporate-blog-detail.component';

describe('CorporateBlogDetailComponent', () => {
  let component: CorporateBlogDetailComponent;
  let fixture: ComponentFixture<CorporateBlogDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateBlogDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporateBlogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
