import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { NDAUrls } from './_urls/NDAUrls';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NdatrackandTraceService {

  sidebarShow: boolean;

  headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient,
    private router: Router,
    private url: NDAUrls) {
      this.sidebarShow = false;
     }
   
    loginVar = {
      userId: "",
      password:""
    }
    
    showNav(){
      this.sidebarShow = true;
    }
    hideNav(){
      this.sidebarShow = false;
    }
    dashboard(){
      this.router.navigate(['/adminDash'])
    }
    userManage(){
      this.router.navigate(['/Inspector'])
    }
    companyManage(){
      this.router.navigate(['/userManagement'])
    }
    prodManage(){
      this.router.navigate(['/addProducts'])
    }
    trackingManage(){
      this.router.navigate(['./EpedigreeConsignment'])
    }
    scanManage(){
      this.router.navigate(['/Complaints'])
    }
    inspScanManage(){
      this.router.navigate(['/Epedigree'])
    }
    complaints(){
      this.router.navigate(['/UserComplaints'])
    }
    message(){
      this.router.navigate(['/MessagingEmail'])
    }
    ndaAction(){
      this.router.navigate(['/NdaAction'])
    }
    log_Out(){
      localStorage.clear();
      this.router.navigate(['/login'])
    }
 
  
}
