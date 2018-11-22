import { Component, OnInit ,Inject} from '@angular/core';
import { NdaserviceService } from '../../../ndaservice.service';

import { Router, ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { User } from '../../../user';
import { NgForm } from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { listStagger } from '../../animated';

export interface DialogData {
  email: string;
  name: string;
}


@Component({
  selector: 'app-distrubuters',
  templateUrl: './distrubuters.component.html',
  styleUrls: ['./distrubuters.component.scss'],
  animations: [
    listStagger
  ],
})

export class DistrubutersComponent implements OnInit {

  constructor(private data:NdaserviceService,private router:Router,public dialog: MatDialog,private activatedRoute:ActivatedRoute) { }

  response:any;
  distrubuterarray:any;


p=1;
  name: string;
  phone: string;
  loading=true;

  email = new FormControl('', [Validators.required, Validators.email]);

getErrorMessage() {
  return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
          '';
}


  ngOnInit() {
    this.data.getDistributerDetails().subscribe((data:any)=>{
      this.response=data
      this.distrubuterarray=this.response.data;
      this.loading=false;


    })
  }

  viewBranches(id,distname)
  {
    this.router.navigate([id,distname,'branches'],{relativeTo: this.activatedRoute});
  }
  adddist()
  {
    this.dialog.open(AddDistrubuterDialogComponent, {

      width: '500px',
      data: {name: this.name, phone: this.phone,email:this.email}
    });
  }


}
@Component({
  selector: 'AddDistrubuterDialogComponent',
  templateUrl: 'adddisttubuterdialog.html',
})
export class AddDistrubuterDialogComponent {




  constructor(
    public dialogRef: MatDialogRef<AddDistrubuterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    public name="ashish";
    public phone="";
    public email="";
    public location="";
    public certificate;
    public branches;
    public ngform;
    userModel=new User (this.name,this.phone,this.email,this.location,this.branches,this.certificate);

  onNoClick(): void {
    this.dialogRef.close();
  }
  private validate(name,password) {
    if(name==='ashish')
    {
      if(password==='hello')
      {
        console.log('hello');

      }
    }

  }

  onSubmit(form: NgForm)
  {
    console.log(form);
  }
  hello(event)
  {
    this.dialogRef.close();

  }

}
