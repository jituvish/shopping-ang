import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  addUser : FormGroup;
  isSubmit = false;

  constructor(private _fb : FormBuilder, private _http : HttpClient
    ) {
    this.addUser = this._fb.group({
      name : ["", Validators.required],
      image : ["", Validators.required],
      city : ["", Validators.required]
    });
    
   }

  ngOnInit() {
  }
  save(image){
    this.isSubmit = true;
    if(this.addUser.invalid)
    {
      return;
    }
    // console.log(image.files)
    let form = new FormData;
    form.append("image", image.files[0]);
    form.append("formdata", JSON.stringify(this.addUser.value));

    this._http.post<any>("http://localhost:2000/api/add", form).subscribe((result)=>{
      console.log(result);
    })


    
  }

}
