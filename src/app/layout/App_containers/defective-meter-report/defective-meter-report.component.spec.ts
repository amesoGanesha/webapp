import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectiveMeterReportComponent } from './defective-meter-report.component';

describe('DefectiveMeterReportComponent', () => {
  let component: DefectiveMeterReportComponent;
  let fixture: ComponentFixture<DefectiveMeterReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefectiveMeterReportComponent]
    });
    fixture = TestBed.createComponent(DefectiveMeterReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
