import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongratulationsMessageComponent } from './congratulations-message.component';

describe('CongratulationsMessageComponent', () => {
  let component: CongratulationsMessageComponent;
  let fixture: ComponentFixture<CongratulationsMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongratulationsMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongratulationsMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
