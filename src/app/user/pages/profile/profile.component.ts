import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private _userServ : UserService) {
    this._userServ.userInfo().subscribe((result)=>{
      console.log(result);
    })
   }

  ngOnInit() {
  }

}
