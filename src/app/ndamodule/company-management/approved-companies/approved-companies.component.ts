import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NdaserviceService } from '../../../ndaservice.service';
import { trigger, state, style, transition, animate, stagger, query ,keyframes} from '@angular/animations';
import { listStagger } from '../../animated';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-approved-companies',
  templateUrl: './approved-companies.component.html',
  styleUrls: ['./approved-companies.component.scss'],
  animations: [
    listStagger
  ]
})
export class ApprovedCompaniesComponent implements OnInit {

  constructor(private router:Router,private data :NdaserviceService,private activatedRoute:ActivatedRoute) { }

  response$={
    statusCode:"",
    message:"",
    data:""
  }
  loading=true;
  imgUrl="http://54.169.105.23:8080/Images/";
  ngOnInit() {
    this.getapproved();
  }

  getapproved()
  {
    this.data.appManufacturer().pipe(catchError(error=>{return throwError(alert("Some error occurred!!! please try again"))})).subscribe((data:any)=>{this.response$=data
    this.loading=false})
  }
  public viewdetails(i,userName)
  {
    console.log(i,userName);
    
   this.router.navigate([i,userName],{relativeTo:this.activatedRoute});
  }

}
