import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Component1 } from './shared/component/component1/component1.component';
import { MaterialModule } from './shared/modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component2 } from './shared/component/component2/component2.component';
import { Component3 } from './shared/component/component3/component3.component';
import { TableComponent } from './shared/component/table/table.component';
import { Component4 } from './shared/component/component4/component4.component';
import { Component5 } from './shared/component/component5/component5.component';
import { Component6 } from './shared/component/component6/component6.component';
import { Component7 } from './shared/component/component7/component7.component';
import { Component8 } from './shared/component/component8/component8.component';
import { Component9 } from './shared/component/component9/component9.component';
import { Component10 } from './shared/component/component10/component10.component';
import { CardComponent } from './shared/component/card/card.component';
import { ProductDashboardComponent } from './shared/component/product-dashboard/product-dashboard.component';
import { ProductComponent } from './shared/component/product-dashboard/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1,
    Component2,
    Component3,
    Component4,
    Component5,
    Component6,
    Component7,
    Component8,
    Component9,
    Component10,
    TableComponent,
    CardComponent,
    ProductDashboardComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
