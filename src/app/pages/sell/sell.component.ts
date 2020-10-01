import { Component, OnInit } from '@angular/core';
import { SellService } from './sell.service';
import { Sell } from './sell.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProductService } from '../Mobile_Product/product.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  sell:Sell[];
  model:any={};
  productId:number;
  product;
  sellMessage = null;
  SubmitSpinner = false;
  qty;
  amount;



  constructor(private SellService:SellService,
              private route:ActivatedRoute,
              private ProductService:ProductService,
              private router:Router) { }

  // getSells(){
  //   this.SellService.getSells().subscribe((data)=>{
  //   this.sell = data as [];
  //    console.log(this.sell);
  //   });
  // }

  getProductId(){
    this.route.params.subscribe((param:Params)=>{
    this.productId = +param['id'];
    });
  }

  getProduct(){
    this.ProductService.getProduct(this.productId).subscribe((data)=>{
     this.product = data as any;
    });
  }


  ngOnInit(): void {

    //get sell
    // this.getSells();

    //get productid
    this.getProductId();

    //get product
    this.getProduct();

  }

  onSubmit(sellForm:NgForm){

    this.SubmitSpinner = true;

    const sell = {
      Date             : sellForm.value.Date,
      Quantity         : sellForm.value.Quantity,
      ProductId        : sellForm.value.ProductId,
      Amount           : sellForm.value.Amount,
      CustomerName     : sellForm.value.CustomerName,
      CustomerContact  : sellForm.value.CustomerContact,
      TotalAmount      : sellForm.value.TotalAmount
    }
    //  console.log(sell);
    this.SellService.CreateSell(sell).subscribe((data)=>{
      this.SubmitSpinner = false;
     console.log(data);
    this.router.navigate(['products']);
    },err=>{
      console.log(err);
      this.sellMessage = "Stock is less to sell, Please check.";
      this.SubmitSpinner = false;
    // console.log(err);
    });
  }

  onActionButton(event){
    setInterval(()=>{
     (event.target as HTMLButtonElement).disabled = true;
    },500);
  }

  OnHandlePopup(){
    this.sellMessage = null;
    this.router.navigate(['products']);
  }

  onGetQty(event){
   this.qty = event.target.value;
  }

  onGetAmount(event){
    this.amount = event.target.value;
  }

}
