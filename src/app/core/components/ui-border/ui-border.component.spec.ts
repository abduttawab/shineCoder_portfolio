import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBorderComponent } from './ui-border.component';

describe('UiBorderComponent', () => {
  let component: UiBorderComponent;
  let fixture: ComponentFixture<UiBorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiBorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
