import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule, MatButtonModule, MatSidenavModule,
  MatIconModule, MatListModule, MatGridListModule, MatCardModule,
  MatMenuModule, MatFormFieldModule, MatInputModule, MatSnackBarModule } from '@angular/material';

const angularMaterialModules = [
  CommonModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule
]

@NgModule({
  imports: angularMaterialModules,
  exports: angularMaterialModules,
  declarations: []
})

export class MaterilModule { }