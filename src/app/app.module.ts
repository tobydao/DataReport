import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatModule } from '../mat.module';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';

@NgModule({
  imports:
  [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatModule
  ],
  declarations:
  [
    AppComponent,
    TableComponent
  ],
  bootstrap:
  [
    AppComponent
  ]
})
export class AppModule { }
