import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Product } from '../product.model';
import { Category } from 'app/pages/Category/category.model';
import { Company } from 'app/pages/Company/add-product-company/company.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit, OnDestroy {
 productId:number;
 product:Product;
 category:Category;
 company:Company;
 updatedPopup = null;
 sub:Subscription;
 companySelected;
 categorySelected;
 SubmitSpinner = false;


 EditProductForm:FormGroup;


  constructor(private route:ActivatedRoute, private productservice:ProductService, private router:Router) { }

  OnHandlePopup(){
    this.updatedPopup = null;
    this.router.navigate(['products']);
  }

  //GET Category
 getCategories(){
  this.sub = this.productservice.getCategories().subscribe((data)=>{
  //  console.log(data);
   this.category = data as any;
  });
 }

 //GET Company
 getCompanies(){
   this.sub = this.productservice.getCompanies().subscribe((data)=>{
  //  console.log(data);
   this.company = data as any;
   });
 }


  ngOnInit(): void {


    //Reactive Form Approach
    this.EditProductForm = new FormGroup({
        'Id'              : new FormControl(null),
        'CompanyId'       : new FormControl(null),
        'CategoryId'      : new FormControl(null),
        'ModelName'       : new FormControl(null),
        'stock'           : new FormControl(null),
        'Specification'   : new FormControl(null)
    });

     // Get ActiveRoute ID
    this.route.params.subscribe((param:Params)=>{
    this.productId = +param['id'];
   });

    //get single product
     this.sub = this.productservice.getProduct(this.productId).subscribe((data)=>{
      //  console.log(data);
     this.product = data as any;
     this.categorySelected = this.product.CategoryId;
     this.companySelected = this.product.CompanyId;
    //  console.log("Category Select ID : "+ this.product.CategoryId)
    //  console.log("company selected id : "+ this.product.CompanyId);
     })

     // GET Category
     this.getCategories();

     //GET Company
     this.getCompanies();
  }



  onUpdate(){
    // console.log(this.EditProductForm.value);

   this.SubmitSpinner = true;

    this.sub = this.productservice.updateProduct(this.productId,this.EditProductForm.value).subscribe((data)=>{
    const message = "Record Updated Successfully.."
    this.updatedPopup = message;
    this.SubmitSpinner = false;
    //  console.log(this.productId);
     console.log(data);
    },err=>{
      this.updatedPopup = "An Error Occured.";
      this.SubmitSpinner = false;
    });
  }

  ngOnDestroy():void{
    this.sub.unsubscribe();
  }

  actionButton(event){
    setInterval(()=>{
    (event.target as HTMLButtonElement).disabled = true;
    },100)
  }


}
