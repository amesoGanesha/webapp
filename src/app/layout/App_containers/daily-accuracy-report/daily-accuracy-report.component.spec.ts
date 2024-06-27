import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyAccuracyReportComponent } from './daily-accuracy-report.component';

describe('DailyAccuracyReportComponent', () => {
  let component: DailyAccuracyReportComponent;
  let fixture: ComponentFixture<DailyAccuracyReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyAccuracyReportComponent]
    });
    fixture = TestBed.createComponent(DailyAccuracyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
