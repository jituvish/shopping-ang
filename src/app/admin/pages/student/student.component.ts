import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  student = [
    {
      name : "rohit",
      age : 25,
      fee : 5000,
      gender : "male" 
    },
    {
      name : "nidhi",
      age : 29,
      fee : 8000,
      gender : "female" 
    },
    {
      name : "nitin",
      age : 28,
      fee : 10000,
      gender : "male" 
    },
    {
      name : "megha",
      age : 29,
      fee : 22000,
      gender : "female" 
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
