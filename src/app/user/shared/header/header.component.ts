import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  categoryArr=[];

  constructor(private _cateServe : CategoryService, public _loginServ : LoginService) {
    this._cateServe.getData().subscribe((result)=>{
      this.categoryArr = result;
    })
   }

  ngOnInit() {
  }

}
