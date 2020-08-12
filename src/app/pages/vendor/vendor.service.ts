import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http:HttpClient) { }

  AddVendors(vendor){
   return this.http.post("https://localhost:44320/api/Vendors",vendor);
  }

  getVendors(){
    return this.http.get("https://localhost:44320/api/Vendors");
  }
}
