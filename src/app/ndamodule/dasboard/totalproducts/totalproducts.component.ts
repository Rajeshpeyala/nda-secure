import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { listStagger } from '../../animated';
import { Router, ActivatedRoute } from '@angular/router';
import { NdaserviceService } from '../../../ndaservice.service';


@Component({
  selector: 'app-totalproducts',
  templateUrl: './totalproducts.component.html',
  styleUrls: ['./totalproducts.component.scss'],
  animations:[
    listStagger
  ]
})
export class TotalproductsComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private data: NdaserviceService) { }

  imgUrl = 'http://54.169.105.23:8080/Images/';
  productVar = {
    statusCode: '',
    message: '',
    data: []
  };
  p=1;
  ngOnInit() {
    this.data.productAdd().subscribe(
      (response: any) => {
      this.productVar = response;
      }
    );
  }


  viewdetails(id, name) {
    this.router.navigate(['proddet', id, name], { relativeTo: this.route });
  }
}
