import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatModule } from '../mat.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { HeaderComponent } from './header/header.component';
import { PickerComponent } from './table/picker/picker.component';

@NgModule({
  imports:
  [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatModule,
  ],
  declarations:
  [
    AppComponent,
    TableComponent,
    HeaderComponent,
    PickerComponent
  ],
  bootstrap:
  [
    AppComponent
  ]
})
export class AppModule { }
