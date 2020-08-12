import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  addCompany(company: any) {
    throw new Error("Method not implemented.");
  }
  rootUrl = "https://localhost:44320/";
  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get(this.rootUrl + "api/Products");
  }

  getProduct(id){
    return this.http.get(this.rootUrl + "api/Products/"+id);
  }

  deleteProduct(id){
    return this.http.delete(this.rootUrl+"api/Products/"+id);
  }

  getCategories(){
    return this.http.get(this.rootUrl+"api/Categories");
  }

  getCompanies(){
    return this.http.get(this.rootUrl+"api/companies");
  }

  updateProduct(id,product){
    return this.http.put(this.rootUrl + "api/Products/"+id,product);
  }

  addProduct(product){
   return this.http.post(this.rootUrl + "api/Products", product);
  }


}
