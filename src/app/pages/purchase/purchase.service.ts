import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  rootURL="http://natraj-mobile.somee.com/api/";
  constructor(private http:HttpClient) { }

  getPurchaseItems(){
   return this.http.get(this.rootURL + "Purchases")
  }

  addPurchase(purchase){
    return this.http.post(this.rootURL + "Purchases",purchase);
  }

  deletePurchase(Id:number){
    return this.http.delete(this.rootURL + "Purchases/"+Id);
  }

  getDateFilter(model:any){
    return this.http.post(this.rootURL+ "PurchaseDateFilter",model);
  }

}
