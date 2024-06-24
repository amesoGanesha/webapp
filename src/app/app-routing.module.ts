import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './login/loginpage/loginpage.component';

const routes: Routes = [
  { path: 'Auth', loadChildren: () => import('./login/login/login.module').then(m => m.LoginModule) },
  { path: 'App', loadChildren: () => import('./navbar/application/application.module').then(m => m.ApplicationModule) },
  { path: '', component: LoginpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
