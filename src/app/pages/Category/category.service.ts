import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn:"root"
})
export class CategoryService{
  rootUrl = "http://natraj-mobile.somee.com/";

  constructor(private http:HttpClient){}

  getCategories(){
    // const token = localStorage.getItem('userToken');
    // const headers = new HttpHeaders({'Authorization': `Bearer ${token}`});
    return this.http.get(this.rootUrl + "api/Categories");
  }

  getCategory(id){
    // const token = localStorage.getItem('userToken');
    // const headers = new HttpHeaders({'Authorization': `Bearer ${token}`});
    return this.http.get(this.rootUrl+"api/Categories/"+id);
  }

  addCategories(categoryData){
    // const token = localStorage.getItem('userToken');
    // const headers = new HttpHeaders({'Authorization': `Bearer ${token}`});
    return this.http.post(this.rootUrl + "api/Categories/",categoryData)
  }

  addCategory(category){
    // const token = localStorage.getItem('userToken');
    // const headers = new HttpHeaders({'Authorization': `Bearer ${token}`});
    return this.http.post(this.rootUrl+"api/Categories",category);
  }

  delelteCategory(id:number){
    // const token = localStorage.getItem('userToken');
    // const headers = new HttpHeaders({'Authorization': `Bearer ${token}`});
    return this.http.delete(this.rootUrl+ "api/Categories/"+id);
  }

  updateCategory(id:number, category){
    // const token = localStorage.getItem('userToken');
    // const headers = new HttpHeaders({'Authorization': `Bearer ${token}`});
    return this.http.put(this.rootUrl + "api/Categories/"+id,category);
  }


}
