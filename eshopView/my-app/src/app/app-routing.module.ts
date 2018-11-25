import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { Checkout1Component } from './checkout1/checkout1.component';
import { Checkout2Component } from './checkout2/checkout2.component';
import { Checkout3Component } from './checkout3/checkout3.component';
import { AccountComponent } from './account/account.component';
import { HistoryComponent } from './history/history.component';
import { DetailHistoryComponent } from './detail-history/detail-history.component';
import { DetailProductComponent } from './detail-product/detail-product.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'history/:id',
    component: DetailHistoryComponent
  },
  {
    path: 'product/:id',
    component: DetailProductComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'checkout1',
    component: Checkout1Component
  },
  {
    path: 'checkout2',
    component: Checkout2Component
  },
  {
    path: 'checkout3',
    component: Checkout3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
