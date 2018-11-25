import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-detail-history',
  templateUrl: './detail-history.component.html',
  styleUrls: ['./detail-history.component.css']
})
export class DetailHistoryComponent implements OnInit {
  order = [];
  constructor(private cartSv: CartService , private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cartSv.getDetailOrder(id)
      .subscribe(data => {
        console.log(id);
        this.order = data
      });
  }

}
