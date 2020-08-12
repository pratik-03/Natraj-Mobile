import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})

export class ComapnyService{
  rootUrl = "https://localhost:44320/";

constructor(private http:HttpClient){}



  addCompany(company){
  return this.http.post(this.rootUrl+"api/Companies",company);
 }

 getCompanies(){
   return this.http.get(this.rootUrl+"api/Companies");
 }

 deleteCompany(id){
   return this.http.delete(this.rootUrl+"api/Companies/"+id);
 }

 getCompany(id){
  return this.http.get(this.rootUrl+"api/Companies/"+id);
 }

 updateCompany(id:number, company){
  // const header = new HttpHeaders().set('content-type', 'application/json');
   return this.http.put(this.rootUrl+"api/Companies/"+id,(company));
 }

}
