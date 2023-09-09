import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerPageListComponent } from './inner-page-list.component';

describe('InnerPageListComponent', () => {
  let component: InnerPageListComponent;
  let fixture: ComponentFixture<InnerPageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerPageListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerPageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
