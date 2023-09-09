import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTablesComponent } from './ui-tables.component';

describe('UiTablesComponent', () => {
  let component: UiTablesComponent;
  let fixture: ComponentFixture<UiTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiTablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
