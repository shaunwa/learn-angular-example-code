import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamsExampleComponent } from './params-example.component';

describe('ParamsExampleComponent', () => {
  let component: ParamsExampleComponent;
  let fixture: ComponentFixture<ParamsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParamsExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
