import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  admin = {
    username : "",
    password : ""
  }
  msg = "";

  constructor(private _loginServ : LoginService, private _router : Router) { }

  ngOnInit() {
  }
  do_login(){
    this._loginServ.login(this.admin).subscribe((result)=>{
      if(result){
        localStorage.setItem("adminToken", result);
        this._router.navigate(["/admin/dashboard"]);
      }
    }, err=>{
      if(err.error.type == 1)
      {
        this.msg = "This Username and Password is Incorrect !";
      }
      if(err.error.type == 2)
      {
        this.msg = "This Password is Incorrect !";
      }
    })


  }

}
