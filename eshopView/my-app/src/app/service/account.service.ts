import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }
  getLocalStorage(){
    return JSON.parse(localStorage.getItem('user'))
  }
  setLocalStorage(items){
    let item:string = JSON.stringify(items);
    localStorage.setItem('user',item);
  }
  get(){
    let user:any = this.getLocalStorage()  || null ;
    return user;
  }
  login(item){  
    return this.http.post<any>("http://localhost:58837/api/account/login",this.mapData(item));
  }
  mapData(item){
    return {
      "username":item.username,
      "password":item.password
    }
  }
}
