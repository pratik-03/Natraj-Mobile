import { Component, OnInit } from '@angular/core';
import { PurchaseService } from './purchase.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  purchase;
  term;
  error = null;
  PurchaseMessage = null;
  DeleteConfirmation = false;
  loadingSpinner = false;

    //Pagination
    config: any;
    collection = { count: this.config, data: [] };
    //

  constructor( private PurchaseService:PurchaseService) {
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


  //get purchase
  getPurchase(){
    this.loadingSpinner = true;
    this.PurchaseService.getPurchaseItems().subscribe((data)=>{
      this.purchase = data as any;
      this.loadingSpinner = false;
      console.log(this.purchase);
    },err=>{
      this.error = true;
    }
    );
  }


  ngOnInit(): void {

    this.getPurchase();

  }

  onPurchaseDetails(puchaseId){

  }

  onDelete(purchseId){
   this.PurchaseService.deletePurchase(purchseId).subscribe((data)=>{
     this.PurchaseMessage = "Purchase delete successfully.."
     this.ngOnInit();
   },err=>{
     this.error = true;
   });
  }

  OnHandlePopup(){
    this.PurchaseMessage = null;
  }

  onDeletePopUp(){
    this.DeleteConfirmation = true;
  }

  CancelDelete(){
    this.DeleteConfirmation = false;
  }

}
