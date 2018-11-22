import { Component, OnInit } from '@angular/core';
import { NDAUrls } from 'src/app/_urls/NDAUrls';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  constructor(private url: NDAUrls, private http: HttpClient) { }

  userEmailArrayA: any = [];
  userEmailArrayReg: any = [];
  userEmailArrayRej: any = [];

  emailTo:string;
  subject:string;
  message:string;

  ngOnInit() {
    this.getEmails();
  }

  getEmails() {
    this.http.get(this.url.emailMessageURL).subscribe(
      (data: any) => {
        this.userEmailArrayA = data.data.ApprovedManufacturer;
        this.userEmailArrayReg = data.data.RegisteredManufacturer;
        this.userEmailArrayRej = data.data.RejectedManufacturer;
      })
  }

  sendEmail(){
    const params={
      to: this.emailTo,
      emailSubject: this.subject,
      emailBody: this.message
    }

    this.http.post(this.url.sendEmailURL, params).subscribe(
      data=>{
        console.log(data);
        console.log(params);
        
      }
    )
  }

}
