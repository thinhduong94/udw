import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { 
    
  }
  getAll():Observable<any>{
    return this.http.get<any>("http://localhost:58837/api/product");
  } 
  getProductById(id)
  {
    return this.http.get<any>("http://localhost:58837/api/product/"+id);
  }
}
