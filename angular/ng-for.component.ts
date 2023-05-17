import { Component,OnInit } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit{
ngOnInit(): void {}
    constructor(){}

users=[
  {
    id:100, firstName:'Arun',
    lastName:'Kumar',  emailId:'rahul.kumar@gmail.com'
 
  },



   {
  id:101,
   firstName:'Upasana',
   lastName:'Agarwal',
  emailId:'upasana.agarwal@gmail.com'
 },
  
  {
id:102,
firstName:'rahul ',
lastName:'kumar',
emailId:'rahul.kumar@gmail.com'
  }
];
}
