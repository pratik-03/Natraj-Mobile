import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Company } from './company.model';
import { ProductService } from 'app/pages/Mobile_Product/product.service';
import { ComapnyService } from './company.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product-company',
  templateUrl: './add-product-company.component.html',
  styleUrls: ['./add-product-company.component.css']
})
export class AddProductCompanyComponent implements OnInit {
  addCompanyForm:FormGroup;
  comp:Company;
  addCompanyMessage = null;

  constructor(private companyservice:ComapnyService, private router:Router) { }

  ngOnInit(): void {
  this.addCompanyForm = new FormGroup({
    'Name': new FormControl(null, Validators.required),
    'Country'    : new FormControl(null, Validators.required)
  });
  }

  onSubmit(){
   this.companyservice.addCompany(this.addCompanyForm.value).subscribe((data)=>{
     this.addCompanyMessage = "  Record Submitted Successfully.";
   },err=>{
     this.addCompanyMessage = "An error occured.";
   })
  }

  onHandlePopupMessage(){
    this.addCompanyMessage = null;
    this.router.navigate(['company']);
  }


  onActionButton(event){
    setInterval(()=>{
    (event.target as HTMLButtonElement).disabled = true;
    },500);
  }

}
