import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatButtonModule, MatTreeModule, MatCheckboxModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatTreeModule,
    MatCheckboxModule,
    MatIconModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatTreeModule,
    MatCheckboxModule,
    MatIconModule
  ],
  declarations: []
})
export class AppMaterialModule { }
