import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyAccuracyReportComponent } from './hourly-accuracy-report.component';

describe('HourlyAccuracyReportComponent', () => {
  let component: HourlyAccuracyReportComponent;
  let fixture: ComponentFixture<HourlyAccuracyReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HourlyAccuracyReportComponent]
    });
    fixture = TestBed.createComponent(HourlyAccuracyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
