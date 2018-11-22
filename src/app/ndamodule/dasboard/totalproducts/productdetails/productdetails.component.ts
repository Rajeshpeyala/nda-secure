import { Component, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";

import {
  trigger,
  state,
  style,
  transition,
  animate,
  stagger,
  query
} from "@angular/animations";
import { NdaserviceService } from "../../../../ndaservice.service";

@Component({
  selector: "app-productdetails",
  templateUrl: "./productdetails.component.html",
  styleUrls: ["./productdetails.component.scss"],
  animations: [
    trigger("listStagger", [
      transition("void <=> *", [
        style({ opacity: 0 }),
        animate("750ms ease-in-out")
      ])
    ])
  ]
})
export class ProductdetailsComponent implements OnInit {
  constructor(private data: NdaserviceService, private route: ActivatedRoute) {}

  productdetail: any = {
    productNumber: "",
    medicineName: "",
    manufacturerName: "",
    userName: "admin",
    catagory: "tablet",
    ingredianDrugs: "",
    colour: "",
    dosage: "",
    quantity: "",
    weight: "",
    manufacturingDate: "",
    expiryDate: "",
    barcodeImage: "",
    barcodeNo: "",
    dateOfcreation: "",
    usedFor: "",
    batchNo: "",
    assignStatus: "",
    images: { imageURL0: "" }
  };

  productVar: any = {
    statusCode: "",
    message: "",
    data: []
  };
  manulogo;
  medicinepic;
  userId;
  imgUrl = "http://54.169.105.23:8080/Images/";

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get("id"));
    let name = this.route.snapshot.paramMap.get("userName");
    this.userId = id;
    this.data.productAdd().subscribe((response: any) => {
      (this.productVar = response),
        (this.productdetail = this.productVar.data[this.userId]),
        (this.manulogo = this.imgUrl + this.productdetail.barcodeImage);
      this.medicinepic = this.imgUrl + this.productdetail.images.imageURL0;
    });
  }
}
