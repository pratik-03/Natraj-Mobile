import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CategoryService } from '../category.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  EditCategoryForm:FormGroup;
  CategoryId;
  categoryData;
  submitSpinner = false;

  updateData = null;

  constructor(private categoryservice:CategoryService, private route:ActivatedRoute, private router:Router) { }

  getCategoryId(){
   this.route.params.subscribe((param:Params)=>{
     this.CategoryId = +param['id'];
   })
  }

  ngOnInit(): void {
   this.EditCategoryForm = new FormGroup({
     'Id'  : new FormControl(null),
     'Name': new FormControl(null)
   });

   this.getCategoryId();

   this.categoryservice.getCategory(this.CategoryId).subscribe((data)=>{
    this.categoryData = data;
    // console.log(data);
   });
  }


  onSubmit(){
    this.submitSpinner = true;
   this.categoryservice.updateCategory(this.CategoryId,this.EditCategoryForm.value).subscribe((data)=>{
    this.updateData = "Record Updated Successfully";
    this.submitSpinner = false;
   },err=>{
     this.updateData= "An Error Occured";
     this.submitSpinner = false;
   });
  }



  onHandlePopup(){
    this.updateData = null;
    this.router.navigate(['category']);
  }


  onActionButton(event){
     setInterval(()=>{
       (event.target as HTMLButtonElement).disabled = true;
     },500);
 }

}
