import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  product = {};
  constructor(private route: ActivatedRoute,
    private cartSv:CartService,
    private productSv: ProductService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productSv.getProductById(id)
      .subscribe(data => {
        console.log(id);
        this.product = data.data;
      });
  }
  addCart(item){
    item.quantity = 1;
    this.cartSv.addItem(item);
  }
}
