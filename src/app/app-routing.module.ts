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
    ]
  },
  { path: 'Auth', loadChildren: () => import('./login/login/login.module').then(m => m.LoginModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

