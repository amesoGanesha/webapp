import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineProfileListComponent } from './machine-profile-list.component';

describe('MachineProfileListComponent', () => {
  let component: MachineProfileListComponent;
  let fixture: ComponentFixture<MachineProfileListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MachineProfileListComponent]
    });
    fixture = TestBed.createComponent(MachineProfileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
