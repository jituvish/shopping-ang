import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { priceNum, discountNum } from '../../../helper/validation.helper';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  product : FormGroup;
  isSubmit = false;
  showMsg;

  constructor(private _fb : FormBuilder, private _proServ : ProductService) {
    this.product = this._fb.group({
      _id : [""],
      name : ["", Validators.required],
      price : [null, Validators.required],
      discount : [null, Validators.required],
      category : ["", Validators.required]
    },{
      validator : [priceNum(), discountNum()]
    });
   }

  ngOnInit() {
  }

  submit(){
    this.isSubmit = true;
    if(this.product.invalid){
      return;
    }
    this._proServ.add(this.product.value).subscribe((result)=>{
      if(result){
        this.showMsg = true;
        this.product.setValue({
          _id : "",
          name : "",
          price : null,
          discount : null,
          category : ""
        });
        this.isSubmit = false;
      }
    })
  }

}
