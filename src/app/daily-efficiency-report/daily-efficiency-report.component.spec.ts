import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyEfficiencyReportComponent } from './daily-efficiency-report.component';

describe('DailyEfficiencyReportComponent', () => {
  let component: DailyEfficiencyReportComponent;
  let fixture: ComponentFixture<DailyEfficiencyReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyEfficiencyReportComponent]
    });
    fixture = TestBed.createComponent(DailyEfficiencyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
