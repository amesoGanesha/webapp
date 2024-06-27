import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './login/loginpage/loginpage.component';
import { AuthGuard } from './auth.guard';
import { ReportPageComponent } from './layout/App_containers/report-page/report-page.component';

const routes: Routes = [
      { path: '', component: LoginpageComponent },
      { path: 'xxx', component: ReportPageComponent },
      { path: 'Auth', loadChildren: () => import('./login/login/login.module').then(m => m.LoginModule) },
      { path: 'App', loadChildren: () => import('./layout/layout/layout.module').then(m => m.LayoutModule),canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

