import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allProduct=[];

  constructor(private _proServe : ProductService) {
    this._proServe.getProduct().subscribe((result)=>{
      this.allProduct = result;
    });
   }

  ngOnInit() {
  }

}
