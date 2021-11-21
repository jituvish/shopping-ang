import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  arr=[];
  
  constructor(private _http : HttpClient) { }

  ngOnInit() {
  }

  upload(images){
    // console.log(images.files);
    var file = images.files[0];
    var form = new FormData;
    form.append("images", file);

    this._http.post<any>("http://localhost:2000/api/upload", form).subscribe((result)=>{
      // console.log(result);
      this.arr.push(result.path);
    });

    

  }

}
