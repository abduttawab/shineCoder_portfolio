import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateServicesComponent } from './corporate-services.component';

describe('CorporateServicesComponent', () => {
  let component: CorporateServicesComponent;
  let fixture: ComponentFixture<CorporateServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporateServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
