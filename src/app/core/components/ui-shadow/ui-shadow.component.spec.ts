import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiShadowComponent } from './ui-shadow.component';

describe('UiShadowComponent', () => {
  let component: UiShadowComponent;
  let fixture: ComponentFixture<UiShadowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiShadowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiShadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
