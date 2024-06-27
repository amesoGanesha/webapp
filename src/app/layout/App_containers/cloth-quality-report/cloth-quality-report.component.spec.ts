import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothQualityReportComponent } from './cloth-quality-report.component';

describe('ClothQualityReportComponent', () => {
  let component: ClothQualityReportComponent;
  let fixture: ComponentFixture<ClothQualityReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClothQualityReportComponent]
    });
    fixture = TestBed.createComponent(ClothQualityReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
