import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerPageDetailComponent } from './inner-page-detail.component';

describe('InnerPageDetailComponent', () => {
  let component: InnerPageDetailComponent;
  let fixture: ComponentFixture<InnerPageDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerPageDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerPageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
