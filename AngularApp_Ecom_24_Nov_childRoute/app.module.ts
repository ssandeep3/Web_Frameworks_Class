import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { SproductComponent } from './sproduct/sproduct.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndoorComponent } from './sproduct/indoor/indoor.component';
import { OutdoorComponent } from './sproduct/outdoor/outdoor.component';
import { PdetailsComponent } from './product/pdetails/pdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SproductComponent,
    DashboardComponent,
    IndoorComponent,
    OutdoorComponent,
    PdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
