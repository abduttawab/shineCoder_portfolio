import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioMasonrySixComponent } from './portfolio-masonry-six.component';

describe('PortfolioMasonrySixComponent', () => {
  let component: PortfolioMasonrySixComponent;
  let fixture: ComponentFixture<PortfolioMasonrySixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioMasonrySixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioMasonrySixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
