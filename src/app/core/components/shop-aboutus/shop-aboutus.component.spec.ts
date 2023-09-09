import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAboutusComponent } from './shop-aboutus.component';

describe('ShopAboutusComponent', () => {
  let component: ShopAboutusComponent;
  let fixture: ComponentFixture<ShopAboutusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopAboutusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopAboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
