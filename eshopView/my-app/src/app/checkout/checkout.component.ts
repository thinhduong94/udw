import { Component, OnInit } from '@angular/core';
import { AccountService } from '../service/account.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  benefit = 0;
  infoCheckout = {
    paymethod: 0,
    username: "",
    address: "",
    phone: "",
    cart: {}
  };
  user: any = {};
  cart: any = {};
  constructor(private accountService: AccountService, private cartSv: CartService) {
    this.cart = cartSv.get();
    this.user = accountService.get();
    this.infoCheckout.cart = this.cart;
  }

  ngOnInit() {
  }
  checkBenefit(){
    this.cartSv.getBenefit(this.infoCheckout.username).subscribe(data=>{
      if(data){
        this.benefit = data.value;
        this.total();
      }
    })
  }
  Continue() {
    if (this.infoCheckout.paymethod == 0) {
      this.infoCheckout.username = this.user.username;


    }
    if (this.infoCheckout.paymethod == 1) {

    }
    var arr = [];
    this.cart.forEach(c => {
      arr.push({ product_id: c.id, quatity: c.quantity })
    });
    this.infoCheckout.cart = arr;
    this.cartSv.save(this.infoCheckout).subscribe(data => {
      this.cartSv.addHistory(data);
      alert("Success");
      
    })
    console.log(this.infoCheckout);
  }
  total() {
    let total = 0;
    this.cart.forEach(p => {
      total += p.quantity * p.price;
    });
    return total - ((total*this.benefit)/100);
  }
}
