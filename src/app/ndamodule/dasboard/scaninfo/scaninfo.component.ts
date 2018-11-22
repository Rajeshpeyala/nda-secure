import { Component, OnInit } from '@angular/core';
import { NdaserviceService } from '../../../ndaservice.service';
import { listStagger } from '../../animated';



@Component({
  selector: 'app-scaninfo',
  templateUrl: './scaninfo.component.html',
  styleUrls: [], 
  animations: [
    listStagger
  ]
})
export class ScaninfoComponent implements OnInit {

  constructor(private data:NdaserviceService) { }

  response$:any ={
    statusCode:"",
    message :"",
    data:""
  }
  p: number = 1;
  error:Object ={
    status:"",
    message :"",
    data:""
  }
  loading=true;

  ngOnInit() {
    this.getScaninfo();
  }
  imgUrl="http://54.169.105.23:8080/Images/"

  getScaninfo()
  {
  this.loading=true;
    this.data.sacnFun().subscribe((data:any)=>{
      this.response$=data
      console.log(data);
      this.loading=false;
      error=>{
        console.log(error.error.message);
   
      }
    })
  
  }

}
