import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AccessdeniedComponent } from './accessdenied/accessdenied.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'auth', component: LoginpageComponent },
  { path: 'access-denied', component: AccessdeniedComponent }
];

@NgModule({
  declarations: [
    LoginpageComponent,
    AccessdeniedComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    LoginpageComponent,
    AccessdeniedComponent
  ]
})
export class LoginModule { }
