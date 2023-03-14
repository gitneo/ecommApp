import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import {CartComponent} from "./cart/cart.component";
import {OrderComponent} from "./order/order.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
