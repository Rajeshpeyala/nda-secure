import { Component, OnInit } from '@angular/core';
import { NdaserviceService } from '../../../ndaservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {

  constructor(private data: NdaserviceService,private route:ActivatedRoute) { }

  productdetail: any = {
    "productNumber": "", 
    "medicineName": "", 
    "manufacturerName": "", 
    "userName": "admin", 
    "catagory": "tablet", 
    "ingredianDrugs": "", 
    "colour": "", 
    "dosage": "", 
    "quantity": "", 
    "weight": "", 
    "manufacturingDate": "", 
    "expiryDate": "", 
    "barcodeImage": "", 
    "barcodeNo": "", 
    "dateOfcreation": "", 
    "usedFor": "", 
    "batchNo": "", 
    "assignStatus": "", 
    "images": { "imageURL0": "" }};


  productVar: any = {
    statusCode: "",
    message: "",
    data: []
  };
  manulogo;
  medicinepic;
  userId;
  imgUrl="http://54.169.105.23:8080/Images/";


    ngOnInit() {
      let id= parseInt(this.route.snapshot.paramMap.get('id'));
      this.userId=id;
      this.getProductsAdded()
      
    }

    getProductsAdded()
    {
      this.data.productAdd().subscribe(
        (response: any) => {
        this.productVar = response,
          this.productdetail = this.productVar.data[this.userId],
          this.manulogo=this.imgUrl+this.productdetail.barcodeImage;
          this.medicinepic=this.imgUrl+this.productdetail.images.imageURL0;

        }
      );
    }
    adddist()
    {
      
    }

}
