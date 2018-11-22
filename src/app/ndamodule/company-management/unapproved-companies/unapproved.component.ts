import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NdaserviceService } from '../../../ndaservice.service';
import { trigger,  style, transition, animate, stagger, query ,keyframes} from '@angular/animations';

@Component({
  selector: 'app-unapproved',
  templateUrl: './unapproved.component.html',
  styleUrls: ['./unapproved.component.scss'],
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
export class UnapprovedComponent implements OnInit {

  constructor(private router:Router,private data :NdaserviceService) { }

  response$:any={
    statusCode:"",
    message:"",
    data:""

  }
  loading=true;
  imgUrl="http://54.169.105.23:8080/Images/";
  ngOnInit() {
this.getupapproved();
  }

  getupapproved()
  {
    this.data.unAppManufacturer().subscribe((data:any)=>{this.response$=data
      this.loading=false})
  
  }
}
