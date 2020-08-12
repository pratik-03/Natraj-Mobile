import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VendorService } from './vendor.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {
  error = false;
  errorMessage;
  clearInterval;
  SubmittedMessage = null;

  constructor(private VendorService:VendorService) { }

  ngOnInit(): void {
  }

  onSubmit(vendor:NgForm){
  const Vendor = {
    Name    : vendor.value.Name,
    Contact : vendor.value.Contact,
    Address : vendor.value.Address
  }
  console.log(Vendor);
  this.VendorService.AddVendors(Vendor).subscribe((data)=>{
    console.log(data);
    this.SubmittedMessage = "Vendor Added Successfully";
  },
  err=>{
    this.errorMessage = err.error.Message;
    this.error = true;
   console.log(err);
   vendor.reset();
   this.clearInterval = clearInterval();
  }
  );
  vendor.reset();
  }

  actionButton(event){
   this.clearInterval = setInterval(()=>{
      (event.target as HTMLButtonElement).disabled = true;
    },1000);
  }

  OnHandlePopup(){
    this.SubmittedMessage = null;
    this.clearInterval = clearInterval();
  }

}