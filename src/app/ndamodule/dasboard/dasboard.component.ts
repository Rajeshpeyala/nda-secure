import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NdaserviceService } from '../../ndaservice.service';
import { trigger, style, transition, animate, stagger, query,keyframes } from '@angular/animations';
import { retry } from 'rxjs/operators';




@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-in',keyframes([
                style({ opacity: 0, transform: 'translateX(-75px)', offset: 0 }),
                style({ opacity: 0.5, transform: 'translateX(35px)', offset: 0.3}),
                style({ opacity: 1, transform: 'translateX(0px)', offset: 1 })
                ])
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class DasboardComponent implements OnInit {

  constructor(private http: HttpClient,
    private router: Router,
     private dataservice: NdaserviceService,private route:ActivatedRoute) { }

response$:Object ={
  statusCode:"",
  message :"",
  data:""
}

  ngOnInit() {
     this.dataservice.getData().pipe(retry(3)).subscribe(data => this.response$ = data);
  
  }

  boxes = [{
    img: "../../assets/images/manufacture.png", num: "7000", title: " Total Companies", today: "0", thisweek: "0", thismonth: "0",
  }, {
    img: "../../assets/images/product.png", num: "30000", title: " Total Products", today: "0", thisweek: "0", thismonth: "0",
  }, {
    img: "../../assets/images/total-scan.png", num: "363000", title: " Total Scans", today: "0", thisweek: "0", thismonth: "0",
  }, {
    img: "../../assets/images/failure.png", num: "70", title: " Total Failures", today: "0", thisweek: "0", thismonth: "0",
  }]

  charts=[{
    img: "../../assets/images/1 company.png", num: "7000", title: " Total Companies", today: "0", thisweek: "0", thismonth: "0",
  }, {
    img: "../../assets/images/2 products.png", num: "30000", title: " Total Products", today: "0", thisweek: "0", thismonth: "0",
  }, {
    img: "../../assets/images/3 failed Scan.png", num: "363000", title: " Total Scans", today: "0", thisweek: "0", thismonth: "0",
  }, {
    img: "../../assets/images/4 scans.png", num: "70", title: " Total Failures", today: "0", thisweek: "0", thismonth: "0",
  }]

  public expand(i)
  {
   switch(i)
   {
     case 0:{
      this.router.navigate(['registered'],{relativeTo:this.route});
      break; 
     }case 1:{
      this.router.navigate(['totalprod'],{relativeTo:this.route});
     break; 
    }case 2:{
      this.router.navigate(['scaninfo'],{relativeTo:this.route});
     break; 
    }case 3:{
      this.router.navigate(['failedscan'],{relativeTo:this.route});
     break; 
    }
     default:{

     }
   }
  }






}
