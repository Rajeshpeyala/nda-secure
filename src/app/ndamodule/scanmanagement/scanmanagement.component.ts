import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, stagger, query, keyframes } from '@angular/animations';
import { listStagger } from '../animated';

@Component({
  selector: 'app-scanmanagement',
  templateUrl: './scanmanagement.component.html',
  styleUrls: ['./scanmanagement.component.scss'],animations: [
    listStagger
  ]
})
export class ScanmanagementComponent implements OnInit {

  constructor() { }
  p=1;
  ngOnInit() {
  }
  navLinks=[{
    label:"Successful Scans",path:"scscans"
  },
  {
    label:"Mismatched Scans",path:"misscans"
  },
  {
    label:"No Barcode Exists Scans",path:"nobarscans"
  },
]

}
