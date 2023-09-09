import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBackgroundComponent } from './ui-background.component';

describe('UiBackgroundComponent', () => {
  let component: UiBackgroundComponent;
  let fixture: ComponentFixture<UiBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiBackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
