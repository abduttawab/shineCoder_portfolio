import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopFullwidthListsComponent } from './shop-fullwidth-lists.component';

describe('ShopFullwidthListsComponent', () => {
  let component: ShopFullwidthListsComponent;
  let fixture: ComponentFixture<ShopFullwidthListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopFullwidthListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopFullwidthListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
