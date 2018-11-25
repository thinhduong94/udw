import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  orders:[];
  constructor(private cartSv: CartService) { }

  ngOnInit() {
    this.orders = this.cartSv.getHistory();
  }

}
