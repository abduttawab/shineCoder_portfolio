import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoServicesComponent } from './crypto-services.component';

describe('CryptoServicesComponent', () => {
  let component: CryptoServicesComponent;
  let fixture: ComponentFixture<CryptoServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
