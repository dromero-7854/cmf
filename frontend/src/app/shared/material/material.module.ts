import { NgModule } from '@angular/core';
// modules
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatSelectModule,
  MatCheckboxModule,
  MatMenuModule,
  MatProgressBarModule,
  MatDividerModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatRadioModule,
  MatSnackBarModule
} from '@angular/material';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  imports: [
    MatRippleModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSelectModule,
    MatCheckboxModule,
    MatMenuModule,
    MatProgressBarModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatRadioModule,
    MatSnackBarModule
  ],
  exports: [
    MatRippleModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSelectModule,
    MatCheckboxModule,
    MatMenuModule,
    MatProgressBarModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatRadioModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
