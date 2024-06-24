import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyEfficiencyReportComponent } from './hourly-efficiency-report.component';

describe('HourlyEfficiencyReportComponent', () => {
  let component: HourlyEfficiencyReportComponent;
  let fixture: ComponentFixture<HourlyEfficiencyReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HourlyEfficiencyReportComponent]
    });
    fixture = TestBed.createComponent(HourlyEfficiencyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
