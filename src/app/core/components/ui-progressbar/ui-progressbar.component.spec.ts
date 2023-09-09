import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiProgressbarComponent } from './ui-progressbar.component';

describe('UiProgressbarComponent', () => {
  let component: UiProgressbarComponent;
  let fixture: ComponentFixture<UiProgressbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiProgressbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
