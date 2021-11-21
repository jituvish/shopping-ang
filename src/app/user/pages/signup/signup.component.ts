import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { lengthContact, numContact, checkPass } from '../../../helper/validation.helper';
import { SignupService } from '../../services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  userReg : FormGroup;
  submitCheck = false;

  constructor(private _fb : FormBuilder, private _signupServ : SignupService, private _router : Router) { 
    this.userReg = this._fb.group({
      name : ["", Validators.required],
      username : ["", [Validators.required, Validators.email]],
      password : ["", Validators.required],
      re_password : ["", Validators.required],
      address : ["", Validators.required],
      city : ["", Validators.required],
      contact : ["", Validators.required],
      gender : ["", Validators.required]
    },
    {
      validator : [numContact(), lengthContact(), checkPass()]
    }
    )

  }

  ngOnInit() {
  }
  save(){
    this.submitCheck=true;
    if(this.userReg.invalid){
      return;
    }
    console.log(this.userReg.value);
    this._signupServ.save(this.userReg.value).subscribe((result)=>{
      console.log(result);
      this._router.navigate(["/login"]);
    });
  }

}
