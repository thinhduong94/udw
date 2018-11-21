import { Component, OnInit } from '@angular/core';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  user = {
    username:"",
    password:""
  }

  constructor(private accountService:AccountService) { }

  ngOnInit() {
  }
  login(){
    this.accountService.login(this.user).subscribe(data=>{
      if(data){
        this.accountService.setLocalStorage(data);
      }
    })
  }

}
