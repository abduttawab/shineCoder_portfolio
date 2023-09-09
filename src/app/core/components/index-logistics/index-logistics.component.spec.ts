import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexLogisticsComponent } from './index-logistics.component';

describe('IndexLogisticsComponent', () => {
  let component: IndexLogisticsComponent;
  let fixture: ComponentFixture<IndexLogisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexLogisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexLogisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
