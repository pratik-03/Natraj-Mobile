import { Component, OnInit } from '@angular/core';
import { SellService } from '../sell.service';
import { Router } from '@angular/router';
import { Sell } from '../sell.model';



@Component({
  selector: 'app-sell-table',
  templateUrl: './sell-table.component.html',
  styleUrls: ['./sell-table.component.css']
})
export class SellTableComponent implements OnInit {
term;
date;
sells:Sell[];
loadingSpinner = false;
model:any={};
dateSearchTable = false;


//Pagination
config:any = null;
collection = { count: this.config, data: [] };
//

  constructor(private SellService:SellService, private router:Router)
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

  // getSellsFromDb(){
  //   // this.loadingSpinner = true;
  //   this.SellService.getSells().subscribe((data)=>{
  //   this.sells = data as [];
  //   this.loadingSpinner = false;
  //  });
  // }

  ngOnInit(): void {


    // this.getSellsFromDb();

  }

  onDetails(id:number){
  this.router.navigate(['sell/details', id]);
  }

  getTotal(){

    // return this.sells.reduce((a,b)=>a+b.TotalAmount,0);
   let sum:number = 0;
   this.sells?.filter((value)=>{
   sum += value.Quantity * value.Amount;
   });
   return sum;
  }

   onClearFilter(){
  this.term = null;
  this.date = null;
}

 searchdata(){
  this.loadingSpinner = true;
  this.SellService.getDateFilter(this.model).subscribe(res=>{
    this.sells = res as [];
    // table Showing Details
    this.dateSearchTable = true;
    console.log(res);
    this.loadingSpinner = false;
  },
  err=>{
    console.log(err);
  }
  );
  }



}
