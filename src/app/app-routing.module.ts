import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './login/loginpage/loginpage.component';
import { LayoutComponent } from './layout/layout.component';
import { BeamStockManagementComponent } from './beam-stock-management/beam-stock-management.component';
import { DefectiveMeterEntryComponent } from './defective-meter-entry/defective-meter-entry.component';
import { YarnStockManagementComponent } from './yarn-stock-management/yarn-stock-management.component';
import { ClothQualityManagementComponent } from './cloth-quality-management/cloth-quality-management.component';
import { ShiftManagementComponent } from './shift-management/shift-management.component';
import { ReportPageComponent } from './report-page/report-page.component';
import { AllMachinePageComponent } from './all-machine-page/all-machine-page.component';
import { OperationsMSComponent } from './operations-ms/operations-ms.component';
import { AnalyticReportsComponent } from './analytic-reports/analytic-reports.component';
import { OperationalReportsComponent } from './operational-reports/operational-reports.component';
import { DailyEfficiencyReportComponent } from './daily-efficiency-report/daily-efficiency-report.component';
import { HourlyEfficiencyReportComponent } from './hourly-efficiency-report/hourly-efficiency-report.component';
import { DailyAccuracyReportComponent } from './daily-accuracy-report/daily-accuracy-report.component';
import { HourlyAccuracyReportComponent } from './hourly-accuracy-report/hourly-accuracy-report.component';
import { DailyProductionReportComponent } from './daily-production-report/daily-production-report.component';
import { ProductionReportComponent } from './production-report/production-report.component';
import { ClothQualityReportComponent } from './cloth-quality-report/cloth-quality-report.component';
import { DefectiveMeterReportComponent } from './defective-meter-report/defective-meter-report.component';
import { EffectiveProductionReportComponent } from './effective-production-report/effective-production-report.component';
import { YarnStockReportComponent } from './yarn-stock-report/yarn-stock-report.component';

const routes: Routes = [
  { path: '', component: LoginpageComponent },
  { 
    path: 'App', 
    component: LayoutComponent,
    children: [
      { path: 'report', component: ReportPageComponent },
      { path: 'all-machines', component: AllMachinePageComponent },
      { path: 'beam-stock-management', component: BeamStockManagementComponent },
      { path: 'defective-meter-entry', component: DefectiveMeterEntryComponent },
      { path: 'yarn-stock-management', component: YarnStockManagementComponent },
      { path: 'cloth-quality-management', component: ClothQualityManagementComponent },
      { path: 'operations-ms', component: OperationsMSComponent },
      { path: 'shift-management', component: ShiftManagementComponent },
      { path: 'analytic-reports', component: AnalyticReportsComponent },
      { path: 'operational-reports', component: OperationalReportsComponent },
      { path: 'daily-efficiency-report', component: DailyEfficiencyReportComponent },
      { path: 'hourly-efficiency-report', component: HourlyEfficiencyReportComponent },
      { path: 'daily-accuracy-report', component: DailyAccuracyReportComponent },
      { path: 'hourly-accuracy-report', component: HourlyAccuracyReportComponent },
      { path: 'daily-production-report', component: DailyProductionReportComponent },
      { path: 'production-report', component: ProductionReportComponent },
      { path: 'cloth-quality-report', component: ClothQualityReportComponent },
      { path: 'defective-meter-report', component: DefectiveMeterReportComponent },
      { path: 'effective-production-report', component: EffectiveProductionReportComponent },
      { path: 'yarn-stock-report', component: YarnStockReportComponent },
    ]
  },
  { path: 'Auth', loadChildren: () => import('./login/login/login.module').then(m => m.LoginModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

