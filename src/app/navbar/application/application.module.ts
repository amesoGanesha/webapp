import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationRoutingModule } from './application-routing.module';
import { NavbarComponent } from '../navbar.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DemoNgZorroAntdModule,
    NzMenuModule  
  ]
})
export class ApplicationModule { }
