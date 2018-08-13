import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { SmLibTreeComponent } from './sm-lib-tree/sm-lib-tree.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SmHighchartsComponent } from './sm-highcharts/sm-highcharts.component';
import { SmGridComponent } from './sm-grid/sm-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    SmLibTreeComponent,
    SmHighchartsComponent,
    SmGridComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
