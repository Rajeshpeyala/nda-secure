import { Component, OnInit } from '@angular/core';
import { NDAUrls } from 'src/app/_urls/NDAUrls';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.scss']
})
export class SmsComponent implements OnInit {

  constructor(private url: NDAUrls, private http: HttpClient) { }

  userSMSArrayA: any = [];
  userSMSArrayReg: any = [];
  userSMSArrayRej: any = [];

  SMSTo: string;
  message: string;

  ngOnInit() {
    this.getSMS();
  }

  getSMS() {
    this.http.get(this.url.smsMessageURL).subscribe(
      (data: any) => {
        this.userSMSArrayA = data.data.ApprovedManufacturerPhonenumbers;
        this.userSMSArrayReg = data.data.RegisteredManufacturerPhonenumbers;
        this.userSMSArrayRej = data.data.RejectedManufacturerPhonenumbers;
      }
    )
  }

  sendSMS() {
    const params = {
      countryCode: '+91',
      mobileNo: this.SMSTo,
      emailBody: this.message
    }

    this.http.post(this.url.sendSMSURL, params).subscribe(
      data => {
        console.log(data);
        console.log(params);
      }
    )
  }

}
