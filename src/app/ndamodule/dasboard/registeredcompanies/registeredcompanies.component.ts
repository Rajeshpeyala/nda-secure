import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { listStagger } from '../../animated';
import { NDAUrls } from '../../../_urls/NDAUrls';
import { NdaserviceService } from '../../../ndaservice.service';
import { Router, ActivatedRoute } from '@angular/router';






@Component({
  selector: 'app-registeredcompanies',
  templateUrl: './registeredcompanies.component.html',
  styleUrls: ['./registeredcompanies.component.scss'],
  animations: [
    listStagger
  ]
})
export class RegisteredcompaniesComponent implements OnInit {

  constructor(private http: HttpClient, private url: NDAUrls, private data: NdaserviceService, private router: Router,private route:ActivatedRoute) { }
    p=1;
  response$:any={
    statusCode:"",
    message:"",
    data:""

  }

  loading:boolean=true;
  imgUrl="http://54.169.105.23:8080/Images/"

  ngOnInit() {
  this.data.regManufacturer().subscribe((data:any) =>{ this.response$ = data
  this.loading=false});
  }
  
  public viewdetails(i,userName)
  {
   this.router.navigate([i,userName],{relativeTo:this.route});
  }
}

