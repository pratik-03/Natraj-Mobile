import { Component, OnInit } from '@angular/core';
import { PurchaseService } from './purchase.service';import { Purchase } from './purchase.model';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  purchase:Purchase[];
  term;
  date1;
  date2
  error = null;
  purchaseMessage = null;
  deleteConfirmation = false;
  loadingSpinner = false;
  model:any ={};
  dateSearchTable = false;

  public daterange: any = {};

  public options: any = {
    locale: { format: 'YYYY-MM-DD' },
    alwaysShowCalendars: false,
  };

  public selectedDate(value: any, datepicker?: any) {
    // this is the date  selected
    console.log(value);

    // any object can be passed to the selected event and it will be passed back here
    datepicker.start = value.start;
    datepicker.end = value.end;

    // use passed valuable to update state
    this.daterange.start = value.start;
    this.daterange.end = value.end;
    // this.daterange.label = value.label;
  }

    //Pagination
    config:any = null;
    collection = { count: this.config, data: [] };
    //

  constructor( private purchaseService:PurchaseService) {
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
    console.log(event);
  }


  // //get purchase
  // getPurchase(){
  //   // this.loadingSpinner = true;
  //   this.purchaseService.getPurchaseItems().subscribe((data:[])=>{
  //     // this.purchase = data as [];
  //     // this.loadingSpinner = false;
  //     // console.log(this.purchase);
  //   },err=>{
  //     this.error = true;
  //   }
  //   );
  // }


  ngOnInit(): void {

    // this.getPurchase();



  }

  onPurchaseDetails(puchaseId){

  }

  onDelete(purchaseId:number){
    this.deleteConfirmation = false;
   this.purchaseService.deletePurchase(purchaseId).subscribe((data)=>{
   this.purchaseMessage = "Purchase delete successfully..";
  //  this.getPurchase();
   },err=>{
     this.error = true;
   });

  }

  onHandlePopup(){
    this.purchaseMessage = null;
  }

  onDeletePopUp(){
    this.deleteConfirmation = true;
  }

  cancelDelete(){
    this.deleteConfirmation = false;
  }


  getTotal(){
    // return this.purchase.reduce((a,b)=>a+b.TotalPrice,0);
    let sums:number = 0;
    this.purchase?.filter((value)=>{
     sums += value.Quantity * value.Price;
    });
    return sums;
  }

  onClearFilter(){
    this.term = null;
    this.date1 = null;
    this.date2 = null;
  }

  searchdata(){
    this.loadingSpinner = true;
    this.purchaseService.getDateFilter(this.model).subscribe(res=>{
    this.purchase = res as [];
    this.dateSearchTable = true;
    this.loadingSpinner = false;
    });
  }

}
