import { Component, OnInit,ViewEncapsulation, Inject } from '@angular/core';
import {  Router } from '@angular/router';







@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],

  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {

  constructor(private router:Router,) { }


  navLinks=[{
    label:"Inspectors",path:"inspectors"
  },
  {
    label:"Distrubuters",path:"distrubuters"
  },
]

  ngOnInit() {
  }

}
