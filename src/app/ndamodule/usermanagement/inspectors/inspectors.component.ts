import { Component, OnInit, Inject } from '@angular/core';
import { NdaserviceService } from '../../../ndaservice.service';
import { trigger, state, style, transition, animate, stagger, query ,keyframes} from '@angular/animations';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

import { NgForm, FormControl, Validators } from '@angular/forms';
import { DialogData } from '../distrubuters/distrubuters.component';
import { listStagger } from '../../animated';


export interface DialogData {
  email: string;
  name: string;
}

@Component({
  selector: 'app-inspectors',
  templateUrl: './inspectors.component.html',
  styleUrls: ['./inspectors.component.scss'],
  animations: [
  listStagger
  ],
})

export class InspectorsComponent implements OnInit {


  loading=true;

  imgUrl = "http://54.169.105.23:8080/Images";
  response:any = [];
  inspectorarray:any;

  constructor(private data:NdaserviceService,public dialog: MatDialog) { }

  ngOnInit() {
    this.data.getInspectorDetails().subscribe((data:any)=>{
      this.response=data;
      this.inspectorarray=this.response.data;
      this.loading=false;
    })
  }

  name: string;
  phone: string;
  email = new FormControl('', [Validators.required, Validators.email]);
  
  p=1;
  adddist()
  {
    this.dialog.open(AddInspectorDialogComponent, {
     
      width: '500px',
      data: {name: this.name, phone: this.phone,email:this.email}
    });
  }

}

@Component({
  selector: 'AddInspectorDialogComponent',
  templateUrl: 'addinspector.html',
})
export class AddInspectorDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AddInspectorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    public name="ashish";
    public phone="";
    public email="";
  
    public photo;
    public branches;

    userModel=new Inspector (this.name,this.phone,this.email,this.photo,this.branches);
    public ngform;
   

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
export class Inspector {

  constructor(public name:string,

      public phone:string,
      public email:string,
      public photo:File,
      public branches:string
      ){}
}
