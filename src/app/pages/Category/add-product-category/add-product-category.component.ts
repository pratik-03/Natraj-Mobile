import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product-category',
  templateUrl: './add-product-category.component.html',
  styleUrls: ['./add-product-category.component.css']
})
export class AddProductCategoryComponent implements OnInit {
  addCategoryForm:FormGroup;
  AddRecordMessage = null;
  submitSpinner = false;

  constructor(private categoryservice:CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.addCategoryForm = new FormGroup({
      'Name' : new FormControl(null)
 });

  }

  onSubmit(){
     this.submitSpinner = true;
    this.categoryservice.addCategories(this.addCategoryForm.value).subscribe((data)=>{
      this.AddRecordMessage = "  Record added Successfully."
      this.submitSpinner = false;
    }, err=>{
      this.AddRecordMessage = "An Error Occured.";
      this.submitSpinner = false;
    });
  }

  onHandlePopupMessage(){

     this.AddRecordMessage = null;
     this.router.navigate(['category']);
  }


  onActionButton(event){
  setInterval(()=>{
   (event.target as HTMLButtonElement).disabled = true;
  },500)
  }

}
