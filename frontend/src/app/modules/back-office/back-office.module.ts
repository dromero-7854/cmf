import { NgModule } from '@angular/core';
// modules
import { BackOfficeRoutingModule } from './back-office-routing.module';
import { SharedModule } from '../../shared/shared.module';
// components
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    BackOfficeRoutingModule,
    SharedModule
  ]
})
export class BackOfficeModule { }
