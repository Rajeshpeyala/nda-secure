import { Component, OnInit } from '@angular/core';
import { NdaserviceService } from '../../../../ndaservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NDAUrls } from '../../../../_urls/NDAUrls';
import { listStagger } from '../../../animated';


@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss'],
  animations: [
    listStagger
  ]
})
export class CompanyDetailsComponent implements OnInit {

  constructor(private data:NdaserviceService,private router:Router,private route:ActivatedRoute,private http:HttpClient,private url:NDAUrls) { }

  public userId;

  public company={
    userName: "",
    password: "",
    manufacturerName: "",
    manufacturerProfilePic: "",
    manufacturerPhone: "",
    manufacturerLogo:"",
    manufacturerOtp: "",
    email: "",
    address: "",
    city: "",
    rejectReason: "",
    concernPersonName: "",
    concernPersonPhone: "",
    concernPersonEmail: "",
    verificationStatus: "",
    dateOfCreation: "",
    dateVerification: "",
  }


  verified:boolean;
  productsAdded="";
  response$ ={
    statusCode:"",
    message :"",
    data:""
  }
  errormsg ={
    statusCode:"",
    message :"",
    data:""
  };
  imgUrl="http://54.169.105.23:8080/Images/";
  manulogo:any;
  propic:any;

  ngOnInit() {
    let id= parseInt(this.route.snapshot.paramMap.get('id'));
    let name= this.route.snapshot.paramMap.get('userName');
    this.userId=id;
    this.getDetails({userName:name});  
    this.productNum(name);
  }

  getDetails(parameter){
   

    this.data.ViewApproveManuFun(parameter)
    .subscribe(
      (data:any) => {  this.company=data.data[0];
          this.manulogo=this.imgUrl+this.company.manufacturerLogo;
          this.propic=this.imgUrl+this.company.manufacturerProfilePic;
          console.log(parameter);
          
          
          
          
          if(this.company.verificationStatus==="verified")
          {
            this.verified=true;
          }
      }
    )
  }
  productNum(userName){
    
    return this.http.post(this.url.productNumURL,{
      "userName": userName
    }
    ).subscribe((data1:any)=>{
      this.response$=data1,
     this.productsAdded=this.response$.data;
    },
    error=>{
      this.errormsg=error.error,
      console.log(this.errormsg);
      this.productsAdded="0";
      
    }
      
      )
    }

    adddist()
    {
      
    }
}
