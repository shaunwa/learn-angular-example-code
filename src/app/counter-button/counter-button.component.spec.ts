import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterButtonComponent } from './counter-button.component';

describe('CounterButtonComponent', () => {
  let component: CounterButtonComponent;
  let fixture: ComponentFixture<CounterButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
