import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticReportsComponent } from './analytic-reports.component';

describe('AnalyticReportsComponent', () => {
  let component: AnalyticReportsComponent;
  let fixture: ComponentFixture<AnalyticReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalyticReportsComponent]
    });
    fixture = TestBed.createComponent(AnalyticReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
