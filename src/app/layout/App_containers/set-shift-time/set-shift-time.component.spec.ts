import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetShiftTimeComponent } from './set-shift-time.component';

describe('SetShiftTimeComponent', () => {
  let component: SetShiftTimeComponent;
  let fixture: ComponentFixture<SetShiftTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetShiftTimeComponent]
    });
    fixture = TestBed.createComponent(SetShiftTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
