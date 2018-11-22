import { Component, OnInit } from '@angular/core';
import { listStagger } from '../animated';
import { NdaserviceService } from '../../ndaservice.service';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-inspectorscanmanagement',
  templateUrl: './inspectorscanmanagement.component.html',
  styleUrls: ['./inspectorscanmanagement.component.scss'],
  animations:[
    listStagger
  ]
})
export class InspectorscanmanagementComponent implements OnInit {

  constructor(private data:NdaserviceService) { }

  response$:any ={
    statusCode:"",
    message :"",
    data:""
  }
  loading=true;
  ngOnInit() {
    this.getInspectorScans()
  }
  imgUrl="http://54.169.105.23:8080/Images/";
  getInspectorScans()
  {
    this.data.getInspectorScanDetails().pipe(catchError((error)=>{
      this.loading=false
      return  throwError(alert("No details Found"))
  })).subscribe((data:any)=>{
      this.response$=data;
      this.loading=false;

  },
  (error:any)=>{
    
  }
  )

}}
