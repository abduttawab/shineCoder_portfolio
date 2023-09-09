import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChatComponent } from './account-chat.component';

describe('AccountChatComponent', () => {
  let component: AccountChatComponent;
  let fixture: ComponentFixture<AccountChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
