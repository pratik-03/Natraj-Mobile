import { Component, OnInit } from '@angular/core';
import { ComapnyService } from '../company.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {
  companyId;
  companyData;
  CompanyEditForm:FormGroup;
  updateCompanyMessage = null;

  constructor(private companyservice:ComapnyService, private route:ActivatedRoute, private router:Router) { }

  getCompany(id){
    this.companyservice.getCompany(id).subscribe((data)=>{
      this.companyData = data;
      console.log(data);
    });
  }


  ngOnInit(): void {
       //Reactive Form
       this.CompanyEditForm=new FormGroup({
         'Id'   : new FormControl(),
         'Name' : new FormControl(null, Validators.required),
         'Country'     : new FormControl(null)
       });



    this.route.params.subscribe((param:Params)=>{
     this.companyId = +param['id'];
    });

    this.getCompany(this.companyId);

  }

  onUpdate(){
    this.companyservice.updateCompany(this.companyId,this.CompanyEditForm.value).subscribe((data)=>{
     this.updateCompanyMessage = "Record Update Successfully";
   },err=>{
     this.updateCompanyMessage = "An error Occured";
   });

  }

  onHandleMessagePopup(){
    this.updateCompanyMessage = null;
    this.router.navigate(['company']);
  }

  onActionButton(event){
    setInterval(()=>{
    (event.target as HTMLButtonElement).disabled = true;
    },500);
  }

}
