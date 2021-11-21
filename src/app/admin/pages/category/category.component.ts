import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  category : FormGroup;
  allCategory=[];
  isSubmit = false;
  tempCategory;


  constructor(private _fb : FormBuilder, private _cateServ : CategoryService) {
    this.category = this._fb.group({
      _id : "",
      name : ["", Validators.required]
    })
    this._cateServ.getAll().subscribe((result)=>{
      this.allCategory = result;

    })
   }

  ngOnInit() {
  }

  submit(){
    this.isSubmit = true;
    if(this.category.invalid){
      return;
    }
    // console.log(this.category.invalid);
    if(this.category.value._id)
    {
      this._cateServ.update(this.category.value, this.category.value._id).subscribe((result)=>{
        for(let i = 0; i < this.allCategory.length; i++)
        {
          if(this.allCategory[i]._id == this.category.value._id)
          {
            this.allCategory[i] = this.category.value;
          }
        }
        this.category.setValue({
          _id : "",
        name : ""
      })
      this.isSubmit = false;
    })
    }
    else
    {

      this._cateServ.add(this.category.value).subscribe((result)=>{
        this.allCategory.push(result);
        this.category.setValue({
          _id : "",
          name : ""
        })
        this.isSubmit = false;
      })
    }


  }

  askDelete(obj){
    this.tempCategory = obj;
  }

  delete(){
    this._cateServ.delete(this.tempCategory._id).subscribe((result)=>{
      let n = this.allCategory.indexOf(this.tempCategory);
      this.allCategory.splice(n, 1);


    })
  }
  askEdit(obj){
    this.category.setValue(obj);
  }

  edit_cancel(){
    this.category.setValue({
      _id : "",
      name : ""
    })
    this.isSubmit = false;
  }
}
