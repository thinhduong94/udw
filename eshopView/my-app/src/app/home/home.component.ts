import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  categoryidSelected = "1";

  trademark =[
    {
      id:"1",
      name:"Adidas",
    },
    {
      id:"2",
      name:"Nice",
    }
  ];
  cateroies = [
    {
      id:"1",
      name:"Men",
      subCateroies:[
        {
          id:"2",
          name:"Shirts"
        },
        {
          id:"3",
          name:"Pants"
        },
      ],
      attribute:[
        {
          id:"1",
          name:"Size",
          values:[
            "M","L","XL"
          ]
        },
        {
          id:"2",
          name:"Colours",
          values:[
            "white","blue","green"
          ]
        }
      ]
    },
    {
      id:"4",
      name:"Ladies",
      subCateroies:[
        {
          id:"5",
          name:"Shirts"
        },
        {
          id:"6",
          name:"Pants"
        },
      ],
      attribute:[
        {
          id:"1",
          name:"Size",
          values:[
            "M","L","XL"
          ]
        },
        {
          id:"2",
          name:"Colours",
          values:[
            "white","blue","green"
          ]
        }
      ]
    },
    {
      id:"7",
      name:"Shoes",
      subCateroies:[],
      attribute:[
        {
          id:"3",
          name:"Size",
          values:[
            "20","30","40"
          ]
        },
        {
          id:"2",
          name:"Colours",
          values:[
            "white","blue","green"
          ]
        }
      ]
    },
  ];
  constructor() { }

  ngOnInit() {
  }
  selectCategory(item){
    this.categoryidSelected = item.id;
    console.log(this.categoryidSelected);
  }
  
  selectSubCategory(item){
    this.categoryidSelected = item.id;
    console.log(this.categoryidSelected);
  }
}
