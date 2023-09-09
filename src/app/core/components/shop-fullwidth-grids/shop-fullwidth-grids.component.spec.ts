import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopFullwidthGridsComponent } from './shop-fullwidth-grids.component';

describe('ShopFullwidthGridsComponent', () => {
  let component: ShopFullwidthGridsComponent;
  let fixture: ComponentFixture<ShopFullwidthGridsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopFullwidthGridsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopFullwidthGridsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
