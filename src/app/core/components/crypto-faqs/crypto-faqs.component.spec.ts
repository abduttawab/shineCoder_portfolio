import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoFaqsComponent } from './crypto-faqs.component';

describe('CryptoFaqsComponent', () => {
  let component: CryptoFaqsComponent;
  let fixture: ComponentFixture<CryptoFaqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoFaqsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
