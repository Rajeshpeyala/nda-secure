import { Component, OnInit } from '@angular/core';
import { listStagger } from '../../../animated';
import { NdaserviceService } from '../../../../ndaservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NDAUrls } from '../../../../_urls/NDAUrls';



@Component({
  selector: 'app-companydetails',
  templateUrl: './companydetails.component.html',
  styleUrls: ['./companydetails.component.scss'],
  animations:[
   listStagger
  ]
})
export class CompanydetailsComponent implements OnInit {

  constructor(private data:NdaserviceService,private router:Router,private route:ActivatedRoute) { }

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
  errormsg:any ={
    statusCode:"",
    message :"",
    data:""
  };
  imgUrl="http://54.169.105.23:8080/Images/";
  manulogo;
  propic;

  ngOnInit() {
    let id= parseInt(this.route.snapshot.paramMap.get('id'));
    let name= this.route.snapshot.paramMap.get('userName');
    this.userId=id;
    this.getDetails();  
    this.productNum(name);
  }

  getDetails(){
   

    this.data.getDetails()
    .subscribe(
      (data:any) => { 
          this.company=data.data[this.userId];
          this.manulogo=this.imgUrl+this.company.manufacturerLogo;
          this.propic=this.imgUrl+this.company.manufacturerProfilePic;
          if(this.company.verificationStatus==="verified")
          {
            this.verified=true;
          }
      }
    )
  }
  productNum(userName){
    this.data.getProductnumbers(userName).subscribe((data1:any)=>{
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
  
  
}
