import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
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
      let _item = cart.find(x=>x.id == item.id);
      if(!_item){
        cart.push(item);
      } 
    }else{
      cart.push(item);
    }
    this.setLocalStorage(cart);
  }
  deleteItem(id){
    let cart:any[] = this.get();
    let index = cart.findIndex(x=>x.id == id);
    cart.splice(index,1);
    this.setLocalStorage(cart);
  }
  updateItem(item){
    this.setLocalStorage(item);
  }
  save(item){
   return this.http.post<any>("http://localhost:58837/api/order",this.mapData(item));
  }
  getBenefit(id:string){
    return this.http.get<any>("http://localhost:58837/api/order/getBenefit/"+id);
  }
  mapData(item){
    return {
      "username":item.username,
      "address":item.address,
      "phone":item.phone,
      "paymethod":item.paymethod,
      "detail":item.cart
    }
  }
}
