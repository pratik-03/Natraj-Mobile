import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  productId:number;
  constructor(private route:ActivatedRoute, private productservice:ProductService) { }

  getProductId(){
    this.route.params.subscribe((param:Params)=>{
    this.productId = +param['id'];
    });
  }

  getProduct(){
    this.productservice.getProduct(this.productId).subscribe((data)=>{
      this.product = data;
      // console.log("product"+this.product)
    })
  }

  ngOnInit(): void {
    this.getProductId();
    this.getProduct();
  }

}
