import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterButtonPageComponent } from './counter-button-page.component';

describe('CounterButtonPageComponent', () => {
  let component: CounterButtonPageComponent;
  let fixture: ComponentFixture<CounterButtonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterButtonPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterButtonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
