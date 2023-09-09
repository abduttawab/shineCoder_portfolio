import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoWhitepaperComponent } from './crypto-whitepaper.component';

describe('CryptoWhitepaperComponent', () => {
  let component: CryptoWhitepaperComponent;
  let fixture: ComponentFixture<CryptoWhitepaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoWhitepaperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoWhitepaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
