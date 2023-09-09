import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioServiceComponent } from './portfolio-service.component';

describe('PortfolioServiceComponent', () => {
  let component: PortfolioServiceComponent;
  let fixture: ComponentFixture<PortfolioServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
