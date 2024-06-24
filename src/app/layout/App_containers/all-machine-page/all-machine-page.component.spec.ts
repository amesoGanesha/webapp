import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMachinePageComponent } from './all-machine-page.component';

describe('AllMachinePageComponent', () => {
  let component: AllMachinePageComponent;
  let fixture: ComponentFixture<AllMachinePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllMachinePageComponent]
    });
    fixture = TestBed.createComponent(AllMachinePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
