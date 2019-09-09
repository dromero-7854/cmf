import { NgModule } from '@angular/core';
// modules
import { FrontOfficeRoutingModule } from './front-office-routing.module';
import { SharedModule } from '../../shared/shared.module';
// components
import { NewFixedTermDepositComponent } from './components/new-fixed-term-deposit/new-fixed-term-deposit.component';

@NgModule({
  declarations: [NewFixedTermDepositComponent],
  imports: [
    FrontOfficeRoutingModule,
    SharedModule
  ]
})
export class FrontOfficeModule { }
