import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftExploreComponent } from './nft-explore.component';

describe('NftExploreComponent', () => {
  let component: NftExploreComponent;
  let fixture: ComponentFixture<NftExploreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftExploreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NftExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
