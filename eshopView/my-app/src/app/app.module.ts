import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { Checkout1Component } from './checkout1/checkout1.component';
import { Checkout2Component } from './checkout2/checkout2.component';
import { Checkout3Component } from './checkout3/checkout3.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AccountComponent } from './account/account.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    CheckoutComponent,
    Checkout1Component,
    Checkout2Component,
    Checkout3Component,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
