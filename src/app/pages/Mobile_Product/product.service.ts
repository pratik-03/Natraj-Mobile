 import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  addCompany(company: any) {
    throw new Error("Method not implemented.");
  }
  rootUrl = "http://natraj-mobile.somee.com/";
  constructor(private http:HttpClient) { }

  getProducts(){
  //   const token = localStorage.getItem("userToken");
  // const headers = new HttpHeaders({'Authorization' : `Bearer ${token}`});
    return this.http.get(this.rootUrl + "api/Products");
  }

  getProduct(id){
    // const token = localStorage.getItem("userToken");
    // const headers = new HttpHeaders({'Authorization' : `Bearer ${token}`});
    return this.http.get(this.rootUrl + "api/Products/"+id);
  }

  deleteProduct(id){
    // const token = localStorage.getItem("userToken");
    // const headers = new HttpHeaders({'Authorization' : `Bearer ${token}`});
    return this.http.delete(this.rootUrl+"api/Products/"+id);
  }

  getCategories(){
    // const token = localStorage.getItem("userToken");
    // const headers = new HttpHeaders({'Authorization' : `Bearer ${token}`});
    return this.http.get(this.rootUrl+"api/Categories");
  }

  getCompanies(){
    // const token = localStorage.getItem("userToken");
    // const headers = new HttpHeaders({'Authorization' : `Bearer ${token}`});
    return this.http.get(this.rootUrl+"api/companies");
  }

  updateProduct(id,product){
    // const token = localStorage.getItem("userToken");
    // const headers = new HttpHeaders({'Authorization' : `Bearer ${token}`});
    return this.http.put(this.rootUrl + "api/Products/"+id,product);
  }

  addProduct(product){
    // const token = localStorage.getItem("userToken");
    // const headers = new HttpHeaders({'Authorization' : `Bearer ${token}`});
   return this.http.post(this.rootUrl + "api/Products", product);
  }


}
