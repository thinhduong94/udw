import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { 
    
  }
  getSize(id):Observable<any>{
      return this.http.get<any>("http://localhost:3000/getSize/"+id);
  }
  getColor(id){
    return this.http.get<any>("http://localhost:3000/getColor/"+id);
  }
  getFrom(id){
    return this.http.get<any>("http://localhost:3000/getFrom/"+id);
  }
}
