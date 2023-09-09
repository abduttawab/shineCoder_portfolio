import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoAboutComponent } from './crypto-about.component';

describe('CryptoAboutComponent', () => {
  let component: CryptoAboutComponent;
  let fixture: ComponentFixture<CryptoAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
