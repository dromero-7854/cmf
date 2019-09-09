import { NgModule } from '@angular/core';
// dependencies
import { Routes, RouterModule } from '@angular/router';
// guards
import { AuthGuard } from './core/guards/auth.guard';
// components
import { LoginComponent } from './core/components/login/login.component'

const routes: Routes = [
  {
    path: 'auth',
    component: LoginComponent
  },
  {
    canActivate: [AuthGuard],
    path: 'back-office',
    loadChildren: './modules/back-office/back-office.module#BackOfficeModule'
  },
  {
    path: 'front-office',
    loadChildren: './modules/front-office/front-office.module#FrontOfficeModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
