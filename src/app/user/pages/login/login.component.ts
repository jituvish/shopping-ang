import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user={
    username : "",
    password : ""
  }

  msg = "";

  constructor(private _loginServ : LoginService, private _router : Router) { }

  ngOnInit() {
  }

  do_login(){
    this._loginServ.login(this.user).subscribe((result)=>{
      if(result){
        localStorage.setItem("token", result.token);
        this._router.navigate(["/dashboard"]);
        // console.log(result);
      }
    }, err=>{
      if(err.error.type == 1 )
      {
        this.msg = "This Username and Password is Incorrect !";
      }
        if(err.error.type == 2)
        {
          this.msg = "This Password is Incorrct !";
        }
    })

  }



}
