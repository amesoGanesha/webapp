import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { OperationalReportsComponent } from '../App_containers/operational-reports/operational-reports.component';
import { OperationsMSComponent } from '../App_containers/operations-ms/operations-ms.component';
import { ProductionReportComponent } from '../App_containers/production-report/production-report.component';
import { ReportPageComponent } from '../App_containers/report-page/report-page.component';
import { ShiftManagementComponent } from '../App_containers/shift-management/shift-management.component';
import { YarnStockManagementComponent } from '../App_containers/yarn-stock-management/yarn-stock-management.component';
import { YarnStockReportComponent } from '../App_containers/yarn-stock-report/yarn-stock-report.component';
import { SetShiftTimeComponent } from '../App_containers/set-shift-time/set-shift-time.component';
import { EmployeeAddComponent } from '../App_containers/employee-add/employee-add.component';
import { EmployeeShiftManagementComponent } from '../App_containers/employee-shift-management/employee-shift-management.component';
import { AllEmployeeComponent } from '../App_containers/all-employee/all-employee.component';
import { EmployeeShiftCalendarComponent } from '../App_containers/employee-shift-calendar/employee-shift-calendar.component';
import { AmesoTagStatusComponent } from '../App_containers/ameso-tag-status/ameso-tag-status.component';
import { ClientViewComponent } from '../App_containers/client-view/client-view.component';
import { FactoryManagementComponent } from '../App_containers/factory-management/factory-management.component';
import { FeatureManagementComponent } from '../App_containers/feature-management/feature-management.component';
import { MachineManagementComponent } from '../App_containers/machine-management/machine-management.component';
import { MachineProfileManagementComponent } from '../App_containers/machine-profile-management/machine-profile-management.component';
import { MachineProfileListComponent } from '../App_containers/machine-profile-list/machine-profile-list.component';
import { FeatureListComponent } from '../App_containers/feature-list/feature-list.component';
import { AddFeatureComponent } from '../App_containers/add-feature/add-feature.component';


const routes: Routes = [
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
  { path: 'set-shift-time', component: SetShiftTimeComponent },
  { path: 'employee-add', component: EmployeeAddComponent },
  { path: 'employee-shift-management', component: EmployeeShiftManagementComponent },
  { path: 'all-employee', component: AllEmployeeComponent },
  { path: 'employee-shift-calendar', component: EmployeeShiftCalendarComponent },
  { path: 'feature-management', component: FeatureManagementComponent },
  { path: 'factory-management', component: FactoryManagementComponent },
  { path: 'machine-management', component: MachineManagementComponent },
  { path: 'client-view', component: ClientViewComponent },
  { path: 'ameso-tag-status', component: AmesoTagStatusComponent },
  { path: 'machine-profile-management', component: MachineProfileManagementComponent },
  {path:'machine-profile-list',component:MachineProfileListComponent},
  { path: 'features', component: FeatureListComponent },
  { path: 'features/:id', component: FeatureListComponent },
  { path: 'features/edit/:id', component: FeatureListComponent },
  { path: 'add-features', component: AddFeatureComponent },
  { path: '', redirectTo: '/feature-management', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
