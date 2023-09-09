import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftCreatorsComponent } from './nft-creators.component';

describe('NftCreatorsComponent', () => {
  let component: NftCreatorsComponent;
  let fixture: ComponentFixture<NftCreatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftCreatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NftCreatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
