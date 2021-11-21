import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  name="rohit";
  arr=[];



  constructor(private _http : HttpClient) { }

  ngOnInit() {
  }
  demo(a){
    console.log(a.innerHTML);
  }
  demo2(b){
    console.log(b.value);
  }
  demo4(i){
    i.setAttribute("src", "./assets/images/2.jpg");

  }
  upload(images){
    // console.log(images.files);
    var file = images.files[0];

    var form = new FormData;
    form.append("images", file);

    this._http.post<any>("http://localhost:2000/api/upload", form).subscribe((result)=>{
      // console.log(result);
      this.arr.push(result.path);

    })
  }

}
