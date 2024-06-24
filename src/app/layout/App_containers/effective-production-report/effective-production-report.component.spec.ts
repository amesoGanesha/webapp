import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectiveProductionReportComponent } from './effective-production-report.component';

describe('EffectiveProductionReportComponent', () => {
  let component: EffectiveProductionReportComponent;
  let fixture: ComponentFixture<EffectiveProductionReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EffectiveProductionReportComponent]
    });
    fixture = TestBed.createComponent(EffectiveProductionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
