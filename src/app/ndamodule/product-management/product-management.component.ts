import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { NdaserviceService } from '../../ndaservice.service';
import { listStagger } from '../animated';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss'],
  animations: [listStagger]
})
export class ProductManagementComponent implements OnInit {

  myControl = new FormControl();
  options: string[] =[];
  filteredOptions: Observable<string[]>;

  constructor(private data: NdaserviceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

    this.getProducts();
    this.getProductsNames();
   
  }

  imgUrl = "http://54.169.105.23:8080/Images/";
  response$ = {
    statusCode: "",
    message: "",
    data: []
  };

  
  loading = true;

  getProducts() {
    this.data.productAdd().subscribe(
      (data: any) => {
        this.response$ = data;
        this.loading = false;
      }
    );
  }

 

  getProductsNames() {
   var names = []; 
    this.data.getProductname().subscribe(
      (data: any) => {
        data.forEach(function (medicine) {
          names.push(medicine.medicineName);
        
        });
        this.options=names;
        
      }
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  public viewdetails(i, userName) {
    this.router.navigate(['proddet', i, userName], { relativeTo: this.route });
  }
}
