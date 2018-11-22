import { Injectable } from '@angular/core';
import { MatToolbar, MatSidenav } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {


  matToolbar:MatSidenav;

  constructor() {}


  setsidenav(matoolbar:MatSidenav)
  {
    this.matToolbar=matoolbar;
  }
  public toggle() { this.matToolbar.toggle()}

  
}
