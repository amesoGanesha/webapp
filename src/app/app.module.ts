import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
import { BeamStockManagementComponent } from './beam-stock-management/beam-stock-management.component';
import { DefectiveMeterEntryComponent } from './defective-meter-entry/defective-meter-entry.component';
import { YarnStockManagementComponent } from './yarn-stock-management/yarn-stock-management.component';
import { ClothQualityManagementComponent } from './cloth-quality-management/cloth-quality-management.component';
import { OperationsMSComponent } from './operations-ms/operations-ms.component';
import { ShiftManagementComponent } from './shift-management/shift-management.component';
import { ReportPageComponent } from './report-page/report-page.component';
import { AllMachinePageComponent } from './all-machine-page/all-machine-page.component';
import { LayoutComponent } from './layout/layout.component';
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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ReportPageComponent,
    AllMachinePageComponent,
    BeamStockManagementComponent,
    DefectiveMeterEntryComponent,
    YarnStockManagementComponent,
    ClothQualityManagementComponent,
    OperationsMSComponent,
    ShiftManagementComponent,
    LayoutComponent,
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
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoNgZorroAntdModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzButtonModule,
    NzGridModule,
    NzInputModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    NgMultiSelectDropDownModule.forRoot(),
    ReactiveFormsModule ,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
