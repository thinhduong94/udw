import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product:any[] = [];
  user:any = {};
  constructor(
    private cartSv:CartService,
    private accountService:AccountService
  ) { 
    this.product = cartSv.get();
  }

  ngOnInit() {
     this.user = this.accountService.get();
  }

  update(){
    this.cartSv.updateItem(this.product);
  }
  valuechange(item){
    console.log(item);
  }
  
  delete(id){
    this.cartSv.deleteItem(id);
    this.product = this.cartSv.get();
  }
  
  total(){
    let total = 0;
    this.product.forEach(p => {
        total += p.quantity * p.price;
    });
    return total;
  }

}
