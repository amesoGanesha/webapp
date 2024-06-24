import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LoadingComponent } from 'src/app/spinner/spinner.component';
import { AllMachinePageComponent } from '../App_containers/all-machine-page/all-machine-page.component';
import { AnalyticReportsComponent } from '../App_containers/analytic-reports/analytic-reports.component';
import { BeamStockManagementComponent } from '../App_containers/beam-stock-management/beam-stock-management.component';
import { ClothQualityManagementComponent } from '../App_containers/cloth-quality-management/cloth-quality-management.component';
import { ClothQualityReportComponent } from '../App_containers/cloth-quality-report/cloth-quality-report.component';
import { DailyAccuracyReportComponent } from '../App_containers/daily-accuracy-report/daily-accuracy-report.component';
import { DailyEfficiencyReportComponent } from '../App_containers/daily-efficiency-report/daily-efficiency-report.component';
import { DailyProductionReportComponent } from '../App_containers/daily-production-report/daily-production-report.component';
import { DefectiveMeterEntryComponent } from '../App_containers/defective-meter-entry/defective-meter-entry.component';
import { DefectiveMeterReportComponent } from '../App_containers/defective-meter-report/defective-meter-report.component';
import { EffectiveProductionReportComponent } from '../App_containers/effective-production-report/effective-production-report.component';
import { HourlyAccuracyReportComponent } from '../App_containers/hourly-accuracy-report/hourly-accuracy-report.component';
import { HourlyEfficiencyReportComponent } from '../App_containers/hourly-efficiency-report/hourly-efficiency-report.component';
import { NavbarComponent } from '../App_containers/navbar/navbar.component';
import { OperationalReportsComponent } from '../App_containers/operational-reports/operational-reports.component';
import { OperationsMSComponent } from '../App_containers/operations-ms/operations-ms.component';
import { ProductionReportComponent } from '../App_containers/production-report/production-report.component';
import { ReportPageComponent } from '../App_containers/report-page/report-page.component';
import { ShiftManagementComponent } from '../App_containers/shift-management/shift-management.component';
import { YarnStockManagementComponent } from '../App_containers/yarn-stock-management/yarn-stock-management.component';
import { YarnStockReportComponent } from '../App_containers/yarn-stock-report/yarn-stock-report.component';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NavbarComponent,
    ReportPageComponent,
    AllMachinePageComponent,
    BeamStockManagementComponent,
    DefectiveMeterEntryComponent,
    YarnStockManagementComponent,
    ClothQualityManagementComponent,
    OperationsMSComponent,
    ShiftManagementComponent,
    AnalyticReportsComponent,
    OperationalReportsComponent,
    DailyEfficiencyReportComponent,
    HourlyEfficiencyReportComponent,
    DailyAccuracyReportComponent,
    HourlyAccuracyReportComponent,
    DailyProductionReportComponent,
    ProductionReportComponent,
    ClothQualityReportComponent,
    DefectiveMeterReportComponent,
    EffectiveProductionReportComponent,
    YarnStockReportComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule,  
    HttpClientModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
