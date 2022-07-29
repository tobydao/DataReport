import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  exports: [
    MatToolbarModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule
  ]
})
export class MatModule {}