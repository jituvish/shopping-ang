import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { priceNum } from '../../../helper/validation.helper';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  product : FormGroup;
  isSubmit = false;
  id;

  constructor(private _fb : FormBuilder, private _actRoute : ActivatedRoute, private _proServ : ProductService) {
    this.product = this._fb.group({
      _id : [""],
      name : ["", Validators.required],
      price : [null, Validators.required],
      discount : [null, Validators.required],
      category : ["", Validators.required]
    },
    {
      validator : [priceNum()]
    }
    );
    this.id = this._actRoute.snapshot.paramMap.get("id");
 
   }

  ngOnInit() {
    this._proServ.get(this.id).subscribe((result)=>{
      // console.log(result);
      this.product.setValue(result);
    })
  }
  submit(){
    this.isSubmit = true;
    if(this.product.invalid){
      return;
    }
    console.log(this.product.value);
  }

  edit_cancel(){
    this.product.setValue({
      _id : "",
      name : "",
      price : null,
      discount : null,
      category : ""
    });
    this.isSubmit = false;
  }

}
