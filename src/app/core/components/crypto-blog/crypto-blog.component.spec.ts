import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoBlogComponent } from './crypto-blog.component';

describe('CryptoBlogComponent', () => {
  let component: CryptoBlogComponent;
  let fixture: ComponentFixture<CryptoBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
