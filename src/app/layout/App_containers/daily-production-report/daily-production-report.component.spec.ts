import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyProductionReportComponent } from './daily-production-report.component';

describe('DailyProductionReportComponent', () => {
  let component: DailyProductionReportComponent;
  let fixture: ComponentFixture<DailyProductionReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyProductionReportComponent]
    });
    fixture = TestBed.createComponent(DailyProductionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
