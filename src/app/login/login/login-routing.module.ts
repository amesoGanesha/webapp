import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessdeniedComponent } from '../accessdenied/accessdenied.component';
import { LoginpageComponent } from '../loginpage/loginpage.component';
 

const routes: Routes = [
  { path: 'login', component: LoginpageComponent },
  { path: 'access-denied', component: AccessdeniedComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
