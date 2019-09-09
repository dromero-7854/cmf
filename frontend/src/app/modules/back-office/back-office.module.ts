import { NgModule } from '@angular/core';
// modules
import { BackOfficeRoutingModule } from './back-office-routing.module';
import { SharedModule } from '../../shared/shared.module';
// components
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { SuperAdminHomeComponent } from './components/super-admin-home/super-admin-home.component';

@NgModule({
  declarations: [
    AdminHomeComponent,
    SuperAdminHomeComponent
  ],
  imports: [
    BackOfficeRoutingModule,
    SharedModule
  ]
})
export class BackOfficeModule { }
