import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateAboutComponent } from './corporate-about.component';

describe('CorporateAboutComponent', () => {
  let component: CorporateAboutComponent;
  let fixture: ComponentFixture<CorporateAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporateAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
