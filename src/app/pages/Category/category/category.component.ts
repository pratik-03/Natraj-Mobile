import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';
import { Category } from '../category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
   category:Category;
   message = null;
   deleteMessage = null;
   loadingSpinner = false;
   deleteConfirm = false;
   term;

   //Pagination
 config: any = null;
 collection = { count: this.config, data: [] };
 //

  constructor(private categoryservice:CategoryService, private router:Router)
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

  ngOnInit(): void {
    this.loadingSpinner = true
    this.categoryservice.getCategories().subscribe((cat)=>{
      // console.log(cat);
     this.category = cat as any;
     this.loadingSpinner = false;
    },
    err=>{
      this.message = "An Error Occured."
      this.loadingSpinner = false;
    }
    );
  }

  onEditCategory(categoryId){
    this.router.navigate(['category/edit',categoryId]);
    // console.log(categoryId);
  }

  onDeleteCategory(categoryId){
   this.deleteConfirm = false;

   this.categoryservice.delelteCategory(categoryId).subscribe((data)=>{
    //  console.log(data);
    this.message = "Category Deleted Successfully";
     this.ngOnInit();
   },
   err=>{
      this.message = err.error.Message;
   });
  }


  onHandlePopup(){
    this.message = null;
  }


  deleteConfirmation(){
   this.deleteConfirm = true;
  }

  cancelDelete(){
    this.deleteConfirm = false;

  }


}
