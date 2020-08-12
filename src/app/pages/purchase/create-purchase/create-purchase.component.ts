import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../purchase.service';
import { Purchase } from '../purchase.model';
import { NgForm } from '@angular/forms';
import { ProductService } from 'app/pages/Mobile_Product/product.service';
import { VendorService } from 'app/pages/vendor/vendor.service';
import { ComapnyService } from 'app/pages/Company/add-product-company/company.service';
import { CategoryService } from 'app/pages/Category/category.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-create-purchase',
  templateUrl: './create-purchase.component.html',
  styleUrls: ['./create-purchase.component.css']
})
export class CreatePurchaseComponent implements OnInit {
 purchase;
 product;
 vendor;
 company;
 category;
 productId:number;
 today = new Date().getDate();
 AddPurchaseMessage = null;
 clearInterval;

  constructor(private PurchaseService:PurchaseService,
              private productservice:ProductService,
              private VendorService:VendorService,
              private CompanyService:ComapnyService,
              private CategoryService:CategoryService,
              private route:ActivatedRoute
    ) { }

  getProductIdForPO(){
    this.route.params.subscribe((param:Params)=>{
    this.productId = +param['id'];
    console.log(this.productId)
    });
  }


  // get purchase
  getPurchase(){
   this.PurchaseService.getPurchaseItems().subscribe((purchaseItem)=>{
   this.purchase = purchaseItem as any;
   console.log(this.purchase);
   });
  }

  //get products
  getProduct(){
    this.productservice.getProducts().subscribe((data)=>{
     this.product = data as any;
     console.log(this.product);
    });
  }

  //get vendor
  getVendor(){
   this.VendorService.getVendors().subscribe((data)=>{
   this.vendor = data as any;
   });
  }


  ngOnInit(): void {

  this.getPurchase();

  this.getProduct();

  this.getVendor();

  this.getProductIdForPO();

  }

  onSubmit(purchase:NgForm){
    const pur = {
      Date         : purchase.value.Date,
      VendorId     : purchase.value.VendorId,
      ProductId    : purchase.value.ProductId,
      Remark       : purchase.value.Remark,
      Quantity     : purchase.value.Quantity,
      Price        : purchase.value.Price,
      }
    console.log(pur);

    this.PurchaseService.addPurchase(pur).subscribe((data)=>{
     console.log("Record Submitted successfully!");
     this.AddPurchaseMessage = "Record Submitted successfully!";
    });
    purchase.reset();
  }

  OnHandlePopup(){
    this.AddPurchaseMessage = null;
    this.clearInterval = clearInterval();

  }

  onActionButton(event){
   this.clearInterval =  setInterval(()=>{
      (event.target as HTMLButtonElement).disabled = true;
    },500);

  }

}
