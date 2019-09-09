import { NgModule } from '@angular/core';
import { NgbTooltipModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    NgbTooltipModule, 
    NgbModalModule
  ],
  exports: [
    NgbTooltipModule,
    NgbModalModule
  ]
})
export class NgBootstrapModule { }
