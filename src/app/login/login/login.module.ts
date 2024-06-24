import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginpageComponent } from '../loginpage/loginpage.component';
import { AccessdeniedComponent } from '../accessdenied/accessdenied.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';


@NgModule({
  declarations: [
    LoginpageComponent,
    AccessdeniedComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    DemoNgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginModule { }
