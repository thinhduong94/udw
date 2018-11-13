import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  getLocalStorage(){
    return JSON.parse(localStorage.getItem('cart'))
  }
  setLocalStorage(items){
    let item:string = JSON.stringify(items);
    localStorage.setItem('cart',item);
  }
  get(){
    let cart:any[] = this.getLocalStorage()  || [] ;
    return cart;
  }
  addItem(item){
    let cart:any[] = this.get();
    if(cart.length > 0){
      let count = cart.find(x=>x.id == item.id);
      if(count>0){
        cart.push(item);
      } 
    }
    this.setLocalStorage(cart);
  }
  deleteItem(){

  }
  updateItem(){

  }
  save(){

  }
}
