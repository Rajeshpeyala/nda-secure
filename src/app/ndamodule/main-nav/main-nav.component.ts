import { Component, ViewChild, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NavbarService } from '../../navbar.service';
import { MatSidenav } from '@angular/material';

import { trigger,style, transition, animate, stagger, query } from '@angular/animations';
import { NavItem } from './nav-item';
import { VERSION } from '@angular/compiler';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  animations:[
    trigger('listStagger',[
      transition('* <=> *',[
        query(' :enter ',[
            style({opacity:0,transform:'translateY(115px)'}),
            stagger('500ms',
            animate('1250ms ease-out',
            style({opacity:1,transform:'translateY(0px)'})))
        ],{optional:true})
      ])
    ])
  ]
})


export class MainNavComponent implements OnInit {


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
    
  );

  version = VERSION;

  
 @ViewChild('drawer') public sidenav:MatSidenav

  constructor(private service:NavbarService,private breakpointObserver:BreakpointObserver,) {}

  navItems: NavItem[] = [
  
    {
      displayName: 'Dashboard',
      iconName: 'dashboard',
      route: 'NDA/dashboard'
    },
    {
      displayName: 'User Management',
      iconName: 'supervised_user_circle',
      children: [
        {
          displayName: 'Inspector',
          iconName: 'stars',
          route: 'NDA/inspectors'
        },
        {
          displayName: 'Distributor',
          iconName: 'people',
          route: 'NDA/distributors'
        }
      ]
    },
    {
      displayName: 'Product Management',
      iconName: 'add_shopping_cart',
      route: 'NDA/productManagement'
    },
    {
      displayName: 'Company Management',
      iconName: 'business',
      children: [
        {
          displayName: 'Approved Companies',
          iconName: 'check_circle',
          route: 'NDA/companymanagement/approvedcomp'
        },
        {
          displayName: 'Requests',
          iconName: 'help_outline',
          route: 'NDA/companymanagement/requests'
        },
        {
          displayName: 'Unapproved Companies',
          iconName: 'highlight_off',
          route: 'NDA/companymanagement/unapproved'
        }
      ]
    },
    {
      displayName: 'Tracking e-Pedigree',
      iconName: 'local_shipping',
    
      children: [
        {
          displayName: 'Non-assigned',
          iconName: 'done',
          route: 'NDA/tracking/assigned'
        },
        {
          displayName: 'Assigned',
          iconName: 'done_all',
          route: 'NDA/tracking/notassigned'
        }
      ]
    },
    {
      displayName: 'Workflow Configuration',
      iconName: 'local_florist',
      route: 'NDA/workflowConfiguration'
    },
    {
      displayName: 'Scan Management',
      iconName: 'search',
      route: 'NDA/scanmngmt'
    },
    {
      displayName: 'Inspector Scans',
      iconName: 'search',
      route: 'NDA/insscanmgmt'
    },
    {
      displayName: 'Messaging',
      iconName: 'message',
      children: [
        {
          displayName: 'Sms',
          iconName: 'textsms',
          route: 'NDA/messaging/sms'
        },
        {
          displayName: 'Email',
          iconName: 'email',
          route:  'NDA/messaging/email'
        }
      ]
    },
    {
      displayName: 'NDA Action',
      iconName: 'control_camera',
      route: 'NDA/ndaAction'
    },
    {
      displayName: 'Audit Trails',
      iconName: 'view_headline',
      route: 'NDA/auditTrails'
    },
    {
      displayName: 'Report',
      iconName: 'report',
      route: 'NDA/report'
    }
  ];
    
   
  ngOnInit()
  {
    this.service.setsidenav(this.sidenav)
   
  }
  onClick()
  {
    console.log(this.isHandset$);
    console.log("hello");
  }
  
}
