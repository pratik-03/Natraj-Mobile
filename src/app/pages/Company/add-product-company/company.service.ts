import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})

export class ComapnyService{
  rootUrl = "http://natraj-mobile.somee.com/";


constructor(private http:HttpClient){}


  addCompany(company){
    // const token = localStorage.getItem('userToken');
    // const headers = new HttpHeaders({'Authorization': `Bearer ${token}`});
  return this.http.post(this.rootUrl+"api/Companies",company);
 }

 getCompanies(){
//  const token = localStorage.getItem("userToken");
//  const headers = new HttpHeaders({'Authorization' : `Bearer ${token}`});
  return this.http.get(this.rootUrl+"api/Companies");
 }

 deleteCompany(id){
  // const token = localStorage.getItem("userToken");
  // const headers = new HttpHeaders({'Authorization' : `Bearer ${token}`});
   return this.http.delete(this.rootUrl+"api/Companies/"+id);
 }

 getCompany(id){
  // const token = localStorage.getItem("userToken");
  // const headers = new HttpHeaders({'Authorization' : `Bearer ${token}`});
  return this.http.get(this.rootUrl+"api/Companies/"+id);
 }

 updateCompany(id:number, company){
  // const token = localStorage.getItem("userToken");
  // const headers = new HttpHeaders({'Authorization' : `Bearer ${token}`});
   return this.http.put(this.rootUrl+"api/Companies/"+id,(company));
 }

}
