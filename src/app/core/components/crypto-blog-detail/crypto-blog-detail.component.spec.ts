import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoBlogDetailComponent } from './crypto-blog-detail.component';

describe('CryptoBlogDetailComponent', () => {
  let component: CryptoBlogDetailComponent;
  let fixture: ComponentFixture<CryptoBlogDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoBlogDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoBlogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
