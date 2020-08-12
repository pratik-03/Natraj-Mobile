import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:"root"
})
export class CategoryService{
  rootUrl = "https://localhost:44320/";

  constructor(private http:HttpClient){}

  getCategories(){
    return this.http.get(this.rootUrl + "api/Categories");
  }

  getCategory(id){
    return this.http.get(this.rootUrl+"api/Categories/"+id);
  }

  addCategories(categoryData){
    return this.http.post(this.rootUrl + "api/Categories/",categoryData)
  }

  addCategory(category){
    return this.http.post(this.rootUrl+"api/Categories",category);
  }

  delelteCategory(id:number){
    return this.http.delete(this.rootUrl+ "api/Categories/"+id);
  }

  updateCategory(id:number, category){
    return this.http.put(this.rootUrl + "api/Categories/"+id,category);
  }


}
