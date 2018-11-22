import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NdaserviceService } from '../../../ndaservice.service';
import { listStagger } from '../../animated';

@Component({
  selector: 'app-assignedconsigment',
  templateUrl: './assignedconsigment.component.html',
  styleUrls: ['./assignedconsigment.component.scss'],
  animations: [
    listStagger
  ],
})
export class AssignedconsigmentComponent implements OnInit {

  response$={
    statusCode:"",
    message:"",
    data:""

  }
p=1;
  constructor(private router:Router,private data:NdaserviceService) { }

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
