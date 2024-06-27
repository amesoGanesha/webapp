import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineProfileManagementComponent } from './machine-profile-management.component';

describe('MachineProfileManagementComponent', () => {
  let component: MachineProfileManagementComponent;
  let fixture: ComponentFixture<MachineProfileManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MachineProfileManagementComponent]
    });
    fixture = TestBed.createComponent(MachineProfileManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
