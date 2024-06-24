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
import { FormsModule } from '@angular/forms';
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
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
