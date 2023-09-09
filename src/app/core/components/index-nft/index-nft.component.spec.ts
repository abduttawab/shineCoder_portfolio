import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexNftComponent } from './index-nft.component';

describe('IndexNftComponent', () => {
  let component: IndexNftComponent;
  let fixture: ComponentFixture<IndexNftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexNftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexNftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
