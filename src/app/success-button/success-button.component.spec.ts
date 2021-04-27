import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessButtonComponent } from './success-button.component';

describe('SuccessButtonComponent', () => {
  let component: SuccessButtonComponent;
  let fixture: ComponentFixture<SuccessButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
