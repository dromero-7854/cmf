import { NgModule } from '@angular/core';
// dependencies
import { Routes, RouterModule } from '@angular/router';
// models
import { Role } from './core/models/core.model';
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
    path: 'back-office',
    loadChildren: './modules/back-office/back-office.module#BackOfficeModule',
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin, Role.SuperAdmin] }
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
