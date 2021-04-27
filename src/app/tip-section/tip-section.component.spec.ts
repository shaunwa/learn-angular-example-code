import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipSectionComponent } from './tip-section.component';

describe('TipSectionComponent', () => {
  let component: TipSectionComponent;
  let fixture: ComponentFixture<TipSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
