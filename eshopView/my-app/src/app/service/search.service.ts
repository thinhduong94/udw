import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {

  }
  getSize(id): Observable<any> {
    return this.http.get<any>("http://localhost:58837/api/product/GetSizeByCategory/" + id);
  }
  getColor(id) {
    return this.http.get<any>("http://localhost:58837/api/product/GetColorByCategory/" + id);
  }
  getFrom(id) {
    return this.http.get<any>("http://localhost:3000/getFrom/" + id);
  }
  getBands() {
    return this.http.get<any>("http://localhost:58837/api/band");
  }
  getCategories() {
    return this.http.get<any>("http://localhost:58837/api/category");
  }
  getProductByCategory(id) {
    return this.http.get<any>("http://localhost:58837/api/product/GetProductByCategory/" + id);
  }
  search(item): Observable<any> {
    var searchItem = item;
    // var queryString="http://localhost:3000/search/?";
    // if(searchItem.category){
    //   queryString+="category="+searchItem.category+"&";
    // }
    // if(searchItem.band){
    //   queryString+="band="+searchItem.band+"&";
    // }
    // if(searchItem.color.trim().length){
    //   queryString+="color="+searchItem.color+"&";
    // }
    // if(searchItem.size.trim().length){
    //   queryString+="size="+searchItem.size+"&";
    // }
    // if(searchItem.name.trim().length){
    //   queryString+="name="+searchItem.name+"&";
    // }
    // if(searchItem.priceFrom.trim().length){
    //   queryString+="priceFrom="+searchItem.priceFrom+"&";
    // }
    // if(searchItem.priceTo.trim().length){
    //   queryString+="priceTo="+searchItem.priceTo;
    // }
    //console.log(queryString);
    return this.http.post<any>("http://localhost:58837/api/product/search", this.mappData(searchItem));
  }
  mappData(item) {
    return {
      "band": +item.band || null,
      "category": +item.category || null,
      "color": item.color ||null,
      "name": item.name || null,
      "price": +item.price || null,
      "priceFrom": +item.priceFrom || null,
      "priceTo": +item.priceTo|| null,
      "size": item.size || null
    }
  }
}
