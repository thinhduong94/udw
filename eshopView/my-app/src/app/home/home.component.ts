import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { SearchService } from 'src/app/service/search.service';
import { Observable, forkJoin } from 'rxjs';
import { CartService } from '../service/cart.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchItem = {
    name: "",
    price: "",
    band: "",
    category: "",
    size: "",
    color: "",
    priceFrom:"",
    priceTo:""
  }

  size: any[] = [];
  form: any[] = [];
  color: any[] = [];

  categoryidSelected = "1";
  products: any[] = [];
  bands = [
    {
      id: "1",
      name: "Adidas",
    },
    {
      id: "2",
      name: "Nice",
    }
  ];
  cateroies = [
    {
      id: "1",
      name: "Men",
      subCateroies: [
        {
          id: "2",
          name: "Shirts"
        },
        {
          id: "3",
          name: "Pants"
        },
      ],
      attribute: [
        {
          id: "1",
          name: "Size",
          values: [
            "M", "L", "XL"
          ]
        },
        {
          id: "2",
          name: "Colours",
          values: [
            "white", "blue", "green"
          ]
        }
      ]
    },
    {
      id: "4",
      name: "Ladies",
      subCateroies: [
        {
          id: "5",
          name: "Shirts"
        },
        {
          id: "6",
          name: "Pants"
        },
      ],
      attribute: [
        {
          id: "1",
          name: "Size",
          values: [
            "M", "L", "XL"
          ]
        },
        {
          id: "2",
          name: "Colours",
          values: [
            "white", "blue", "green"
          ]
        }
      ]
    },
    {
      id: "7",
      name: "Shoes",
      subCateroies: [],
      attribute: [
        {
          id: "3",
          name: "Size",
          values: [
            "20", "30", "40"
          ]
        },
        {
          id: "2",
          name: "Colours",
          values: [
            "white", "blue", "green"
          ]
        }
      ]
    },
  ];
  constructor(
    private searchSv: SearchService,
    private productSv: ProductService,
    private cartSv:CartService
  ) { }

  ngOnInit() {
    this.searchItem.category = this.categoryidSelected;
    this.getSearch();
    this.searchSv.getBands().subscribe(data=>{
      this.bands = data.data;
    });
    this.searchSv.getCategories().subscribe(data=>{
      this.cateroies = data.data;
    });
    this.searchSv.getProductByCategory(this.categoryidSelected).subscribe(data => {
      this.products = data;
    })
  }
  selectCategory(item) {
    this.categoryidSelected = item.id;
    this.searchItem.category = this.categoryidSelected;
    this.getSearch();
    this.searchSv.getProductByCategory(this.categoryidSelected).subscribe(data => {
      this.products = data;
    })
  }
  clear(){
    this.searchItem = {
      name: "",
      price: "",
      priceFrom:"",
      priceTo:"",
      band: "",
      category: this.categoryidSelected,
      size: "",
      color: ""
    }; 
  }
  selectSubCategory(item) {
    this.categoryidSelected = item.id;
    console.log(this.categoryidSelected);
  }

  getSearch() {
    forkJoin([
      this.searchSv.getSize(this.categoryidSelected),
      this.searchSv.getColor(this.categoryidSelected)
    ]).subscribe((results: any[]) => {
      this.size = results[0];
      this.color = results[1];
    })
  }
  chooseSize(event){
    console.log(1);
  }
  apply(){
    console.log(this.searchItem);
    this.search(this.searchItem);
  }
  addCart(item){
    item.quantity = 1;
    this.cartSv.addItem(item);
  }
  search(item){
    this.searchSv.search(item).subscribe(data=>{
      this.products = data;
    });
  }
}
