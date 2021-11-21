import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  allProduct=[];
  tempProduct;

  constructor(private _proServ : ProductService) {
    this._proServ.getAll().subscribe((result)=>{
      this.allProduct = result;
    })

   }

  ngOnInit() {
  }
  askDelete(obj){
    this.tempProduct = obj;
  }

  delete(){
    this._proServ.delete(this.tempProduct._id).subscribe((result)=>{
      let n = this.allProduct.indexOf(this.tempProduct);
      this.allProduct.splice(n, 1);
    })
  }


}
