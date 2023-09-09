import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTooltipPopoverComponent } from './ui-tooltip-popover.component';

describe('UiTooltipPopoverComponent', () => {
  let component: UiTooltipPopoverComponent;
  let fixture: ComponentFixture<UiTooltipPopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiTooltipPopoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiTooltipPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
