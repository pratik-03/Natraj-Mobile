import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import * as jQuery from 'jquery';
import { Subscription } from 'rxjs';
import { Product } from '../product.model';
import { ComapnyService } from 'app/pages/Company/add-product-company/company.service';
import { CategoryService } from 'app/pages/Category/category.service';
 window['$'] = jQuery;

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit, OnDestroy {
  products : Product [];
  loadingSpinner = false;
  errormessage = false;
  term;
  company;
  category;
  DeleteConfirmationPopup = false;
  sub:Subscription;



  // public popoverTitle:string;
  public popoverMessage:string ="Are you Sure want Delete Product";
  public confirmClicked:boolean =false;
  public cancelClicked:boolean = false;

   //Pagination
   config: any;
   collection = { count: this.config, data: [] };
   //

  constructor(
              private productservice:ProductService,
              private router:Router,
              private companyservice:ComapnyService,
              private categoryservice:CategoryService,
              )
   {
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push({
        id: i + 1,
        value: "items number" + (i + 1)
      });
    }

    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.collection.count
    };
   }

   pageChanged(event) {
    this.config.currentPage = event;
  }

  //get company
  getComapny(){
   this.companyservice.getCompanies().subscribe(comp=>{
    this.company = comp;
   });
  }

  //get category
  getCategory(){
    this.categoryservice.getCategories().subscribe(cat=>{
    this.category = cat;
    });
  }

  getProduct():void{
         this.loadingSpinner = true
        this.sub = this.productservice.getProducts().subscribe((prod)=>{
         console.log(prod);
         this.products = prod as [];
         this.loadingSpinner = false;
  },
    err=>{
         console.log(err);
         this.loadingSpinner = false;
         this.errormessage = true;
      });
  }

  ngOnInit(): void {

   //get category
     this.getCategory();
    //get company
     this.getComapny();

    this.getProduct();
  }

  onEdit(productId){
       this.router.navigate(['products/edit',productId]);
  }

  onDelete(productId){
      this.DeleteConfirmationPopup = false;
        this.productservice.deleteProduct(productId).subscribe((data)=>{
        console.log("Delelte Succeefully");
        this.ngOnInit();
      });

    }

    ngOnDestroy():void{
      this.sub.unsubscribe()
    }

    onProductDetails(id:number){
      this.router.navigate(['products/detail',id]);
    }

    DeleteConfirmation(){
   this.DeleteConfirmationPopup = true;
    }

    CancelDelete(){
      this.DeleteConfirmationPopup = false;
    }

    onCreatePurchase(ProductId){
     this.router.navigate(['purchase/create',ProductId]);
    }

}
