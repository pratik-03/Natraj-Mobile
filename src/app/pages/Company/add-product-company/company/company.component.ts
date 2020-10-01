import { Component, OnInit } from '@angular/core';
import { ComapnyService } from '../company.service';
import * as jQuery from 'jquery';
 window['$'] = jQuery;
 import { Router } from '@angular/router';
import { Company } from '../company.model';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
company:Company;
deleteMessage = null;
deleteError = null;
loadingSpinner = false;
deleteComfirm = false;
term;

 //Pagination
 config: any = null;
 collection = { count: this.config, data: [] };
 //

constructor(private companyservice:ComapnyService, private router:Router)
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

  getCompany(){
    this.loadingSpinner = true;
    this.companyservice.getCompanies().subscribe((data)=>{
    this.company = data as any;
    this.loadingSpinner = false;
   });
  }

  ngOnInit(): void {

    this.getCompany();
  }

  onEditCompany(companyId){
    this.router.navigate(['company/edit',companyId])
  // console.log(companyId);
  }

  onDeleteCompany(companyId){
      this.deleteComfirm = false;
      this.companyservice.deleteCompany(companyId).subscribe((res)=>{
      this.deleteMessage = "Deleted Successfully"
      this.ngOnInit();
    },
     err=>{

       this.deleteMessage = err.error.Message;
     }
    );
  }

  addButtonClick(){
    this.router.navigate(['add-company']);
  }

  onDeletePopup(){
    this.deleteMessage = null;
 }


 deleteComfirmation(){
   this.deleteComfirm = true;
 }

 cancelDelete(){
   this.deleteComfirm = false;
 }

}
