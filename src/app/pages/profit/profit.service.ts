import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfitService {
  rootURL="https://localhost:44320/api/";

  constructor(private http:HttpClient) { }

  getProfit(){
    return this.http.get(this.rootURL + "Margin");
  }
}
