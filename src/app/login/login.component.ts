import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { NdaserviceService } from '../ndaservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginError: boolean = false
  toggleText='password'

  constructor(private router: Router, private data: NdaserviceService) { }

  ngOnInit() {
  }

  user = {
    userName: '',
    password: ''
  }

  response$ = {
    statusCode: '',
    message: '',
    data: ''
  }

  showPassword() {
    if(this.toggleText=='password'){
    this.toggleText='text';
    }
    else{
      this.toggleText='password'
    }
  }

  getLogin() {
    this.data.getAdminDetails(this.user).subscribe((data: any) => {
      // this.response$ = data
      if (data.statusCode == 200) {
        console.log(data.data[0])
        this.router.navigate(['NDA']);
        localStorage.setItem('userDetails', JSON.stringify(data.data[0]));
        // console.log(localStorage.getItem('userDetails'))
      }
    },
      error => {
        this.loginError = true;
        setTimeout(() => {
          this.loginError = false;
        }, 3000);
      }
    )
  }

}
