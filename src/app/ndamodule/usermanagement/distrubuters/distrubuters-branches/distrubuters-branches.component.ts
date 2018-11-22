import { Component, OnInit } from '@angular/core';
import { NdaserviceService } from '../../../../ndaservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-distrubuters-branches',
  templateUrl: './distrubuters-branches.component.html',
  styleUrls: ['./distrubuters-branches.component.scss'],

})
export class DistrubutersBranchesComponent implements OnInit {

  constructor(private data:NdaserviceService,private router:Router,private route:ActivatedRoute) { }

  response:any={
    statusCode:"",
    message :"",
    data:""
  };
  errormsg:Object ={
    statusCode:"",
    message :"",
    data:""
  };
  distrubuter={
    distributorName:""
  };

  ngOnInit() {
    this.getdistrubuterdetails();

    this.getBranches();

  }

  getdistrubuterdetails()
  {
    let id= parseInt(this.route.snapshot.paramMap.get('id'));
    let name= this.route.snapshot.paramMap.get('userName');
    this.data.getDistributerDetails().subscribe((data:any)=>{
      this.distrubuter=data.data[id];
    })
  }

  getBranches()
  {
    let name= this.route.snapshot.paramMap.get('userName');
    this.data.showBranches({distributorId:name}).subscribe((data:any)=>{this.response=data
     error=>{this.errormsg=error.error.message }
  })
  }

}
