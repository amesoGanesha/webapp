import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeamStockManagementComponent } from './beam-stock-management.component';

describe('BeamStockManagementComponent', () => {
  let component: BeamStockManagementComponent;
  let fixture: ComponentFixture<BeamStockManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeamStockManagementComponent]
    });
    fixture = TestBed.createComponent(BeamStockManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
