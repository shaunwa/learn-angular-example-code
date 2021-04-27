import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoDisplayComponent } from './user-info-display.component';

describe('UserInfoDisplayComponent', () => {
  let component: UserInfoDisplayComponent;
  let fixture: ComponentFixture<UserInfoDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInfoDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
