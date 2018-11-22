import { Component, OnInit } from '@angular/core';
import { listStagger } from '../../animated';
import { NdaserviceService } from '../../../ndaservice.service';



@Component({
  selector: 'app-failedscans',
  templateUrl: './failedscans.component.html',
  styleUrls: ['./failedscans.component.scss'],
  animations: [
    listStagger
  ]
})
export class FailedscansComponent implements OnInit {

  constructor(private data:NdaserviceService) { }

    response$={
  }
  imgUrl="http://54.169.105.23:8080/Images/";

  loading:boolean=true;

 
p=1;
  ngOnInit() {
    this.data.failscans().subscribe((data:any)=>{this.response$=data
      console.log(data);
      
    this.loading=false;
    })
    
   
  }

}
