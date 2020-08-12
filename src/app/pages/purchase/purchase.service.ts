import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Purchase } from './purchase.model';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  rootURL="https://localhost:44320/api/";
  constructor(private http:HttpClient) { }

  getPurchaseItems(){
   return this.http.get(this.rootURL + "Purchases")
  }

  addPurchase(purchase){
    return this.http.post(this.rootURL + "Purchases",purchase);
  }

  deletePurchase(Id){
    return this.http.delete(this.rootURL + "Purchases/"+Id);
  }

}
