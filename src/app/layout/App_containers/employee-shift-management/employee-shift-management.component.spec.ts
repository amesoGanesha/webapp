import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeShiftManagementComponent } from './employee-shift-management.component';

describe('EmployeeShiftManagementComponent', () => {
  let component: EmployeeShiftManagementComponent;
  let fixture: ComponentFixture<EmployeeShiftManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeShiftManagementComponent]
    });
    fixture = TestBed.createComponent(EmployeeShiftManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
