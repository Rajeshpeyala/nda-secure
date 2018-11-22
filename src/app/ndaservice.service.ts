import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { NDAUrls } from './_urls/NDAUrls';
import { product } from './product';
import { map } from 'rxjs/operators';
import { response } from './response';


@Injectable({
  providedIn: 'root'
})
export class NdaserviceService {

  constructor(private http:HttpClient,private url:NDAUrls) { }

    
getAdminDetails(parameter){
  return this.http.post(this.url.login, parameter)
 }


  getData() {
   return this.http.get(this.url.adminDashboard);
  
  }
  regManufacturer(){
    return this.http.get(this.url.totalCompanyURL);
  }
  productAdd(){
    return this.http.get(this.url.productAddURL);
  }
  getProductname(){
    return this.http.get<response>(this.url.productAddURL).pipe(map(data => {return data.data}));
  }
  getSinglemanufacture(userid,headers)
  {
    return this.http.post(this.url.viewManufacturerURL,userid,headers);
  }
  failscans(){
    return this.http.get(this.url.totalFailURL);
  }
  getInspectorDetails() {
    return this.http.get(this.url.inspectorDataURL)
  }
  getDistributerDetails() {
    return this.http.get(this.url.distributerDataURL)

  }
  showBranches(parameter){
   return this.http.post(this.url.branchPerDisURL, parameter)
   }
   getManufacturer(){
      return this.http.get("http://54.169.105.23:8080/NDA/admincontroller/registeredManufacturers");
    }
    approveUser(parameter){
       return this.http.post(this.url.approveManufacturer, parameter)
     }
     appManufacturer(){
      return this.http.get(this.url.approvedManuURL)
    }
    unAppManufacturer(){
      return this.http.get(this.url.unApprovedManuURL)
    }
    ViewApproveManuFun(parameter){
      return this.http.post(this.url.viewManufacturerURL, parameter,) 
    }
    getNonAssinedConsignment() {
      return this.http.get(this.url.assignedDataURL)
    }
    sacnFun(){

      return this.http.get(this.url.totalScanURL)
    }
    getInspectorScanDetails()
    {
        return this.http.get(this.url.ePedigreeURL);     
    }
    getDetails()
    {
      return this.http.get(this.url.totalCompanyURL)
      
    }
    getProductnumbers(parameter){
      return this.http.post(this.url.productNumURL,{
        "userName": parameter
      }
      )
    }
   
}
