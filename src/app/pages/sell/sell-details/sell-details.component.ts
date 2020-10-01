import { Component, OnInit } from '@angular/core';
import { SellService } from '../sell.service';
import { ActivatedRoute, Params } from '@angular/router';
import { param } from 'jquery';

@Component({
  selector: 'app-sell-details',
  templateUrl: './sell-details.component.html',
  styleUrls: ['./sell-details.component.css']
})
export class SellDetailsComponent implements OnInit {
  sell;
  sellId:number;

  constructor(private SellService:SellService, private route:ActivatedRoute) { }

  sellDetails(){
   this.SellService.getSell(this.sellId).subscribe((data)=>{
   this.sell  = data as any;
   });
  }

  getSellId(){
    this.route.params.subscribe((param:Params)=>{
     this.sellId = +param['id'];
    });
  }

  ngOnInit(): void {

    this.getSellId();

    this.sellDetails();

  }

}
