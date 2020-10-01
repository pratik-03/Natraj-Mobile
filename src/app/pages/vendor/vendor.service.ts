import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  rootURL="http://natraj-mobile.somee.com/";

  constructor(private http:HttpClient) { }

  AddVendors(vendor){
   return this.http.post(this.rootURL +"api/Vendors",vendor);
  }

  getVendors(){
    return this.http.get(this.rootURL + "api/Vendors");
  }
}
