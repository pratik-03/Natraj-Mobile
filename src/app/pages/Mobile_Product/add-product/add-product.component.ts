import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'app/pages/Category/category.model';
import { Company } from 'app/pages/Company/add-product-company/company.model';
import { Product } from '../product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product[];
  category:Category[];
  company: Company[];
  AddProductMessage = null;
  constructor(private productservice:ProductService, private router:Router) { }

 //GET Category
 getCategories(){
  this.productservice.getCategories().subscribe((data)=>{
   console.log(data);
   this.category = data as [];
  });
 }

 //GET Company
 getCompanies(){
   this.productservice.getCompanies().subscribe((data)=>{
     console.log(data);
   this.company = data as [];
   });
 }

  ngOnInit(): void {
    this.productservice.getProducts().subscribe((data)=>{
      console.log(data);
    this.product = data as [];
    })

    // GET Category
    this.getCategories();

    //GET Company
    this.getCompanies();
  }

  onSubmit(prod:NgForm){
    const product = {
      CategoryId:prod.value.Category,
      CompanyId:prod.value.Company,
      ModelName:prod.value.ModelName,
      stock : prod.value.stock,
      Specification:prod.value.Specification
    }
    console.log(product);
     this.productservice.addProduct(product).subscribe((data)=>{
      const message = "Product Added Successfully..";
      this.AddProductMessage = message;
      console.log(data);
     },
     err=>{
        this.AddProductMessage = err.message;
     }
     );
  }

  OnHandlePopup(){
    this.AddProductMessage = null;
    this.router.navigate(['products']);
  }

  actionButton(event){
    setInterval(()=>{
    (event.target as HTMLButtonElement).disabled = true;
    },500)

  }

}
