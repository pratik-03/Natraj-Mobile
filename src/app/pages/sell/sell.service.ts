import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SellService {
  rootURL="http://natraj-mobile.somee.com/api/";

  constructor(private http:HttpClient) { }

  CreateSell(sell){
    return this.http.post(this.rootURL + "Sells",sell);
  }

  getSells(){
    return this.http.get(this.rootURL+"Sells");
  }

  getSell(id:number){
    return this.http.get(this.rootURL + "Sells/" + id);
  }


   getDateFilter(model:any){
     return this.http.post(this.rootURL+"SellsDateFilter",model);
   }
}
