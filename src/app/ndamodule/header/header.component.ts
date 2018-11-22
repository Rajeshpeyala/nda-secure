import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { NavbarService } from '../../navbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver,private service: NavbarService,private router:Router) { }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );

  

  notifications=[
    {description:'Firsoup Item Headist ist Grouent List ist G Grouent list.', date:'15/5/2018 at 10:17:42'},
    {description:'Second List Grount LiItem Heistrouent List ist Grom Hg Lt List ist Grouent list.', date:'15/5/2018 at 10:17:42'},
    {description:'Third dint List istnt List ist Grom Hg Lt List ist Grouent list.', date:'15/5/2018 at 10:17:42'},
    {description:'Fourth rsoup Item Headint ourouent List Grouent list.', date:'15/5/2018 at 10:17:42'},
    ]

    settings=[
      {description:"logout",method:"logout()"},
      {description:"settings",method:"logout()"}
    ]

  ngOnInit() {
  }
  logout()
  { 
    this.router.navigate(['login']);
  }

}
