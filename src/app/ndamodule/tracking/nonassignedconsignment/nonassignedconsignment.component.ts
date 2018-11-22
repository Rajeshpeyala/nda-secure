import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NdaserviceService } from '../../../ndaservice.service';

import { listStagger } from '../../animated';

@Component({
  selector: 'app-nonassignedconsignment',
  templateUrl: './nonassignedconsignment.component.html',
  styleUrls: ['./nonassignedconsignment.component.scss'],
  animations: [
    listStagger
  ],
})
export class NonassignedconsignmentComponent implements OnInit {

  constructor(private router: Router, private data: NdaserviceService) { }

  response$ = {
    statusCode:"",
    message:"",
    data:""

  }
  p=1;
  ngOnInit() {
    this.getNonAssigned();
  }
  getNonAssigned()
  {
    this.data.getNonAssinedConsignment().subscribe((data:any)=>{this.response$=data
    console.log(data);
    })
  }

}
