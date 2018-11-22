import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements OnInit {

  constructor(private router:Router,) { }


  navLinks=[{
    label:"Non-assigned",path:"nonassigned"
  },
  {
    label:"Assigned",path:"assigned"
  },
]

  ngOnInit() {
  }

}
