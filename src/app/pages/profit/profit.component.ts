import { Component, OnInit } from '@angular/core';
import { ProfitService } from './profit.service';

@Component({
  selector: 'app-profit',
  templateUrl: './profit.component.html',
  styleUrls: ['./profit.component.css']
})
export class ProfitComponent implements OnInit {
profits;
term;

//Pagination
config: any= null;
collection = { count: this.config, data: [] };
//

  constructor(private ProfitService:ProfitService) {
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push({
        id: i + 1,
        value: "items number" + (i + 1)
      });
    }

    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.collection.count
    };

   }

   pageChanged(event) {
    this.config.currentPage = event;
  }




  ngOnInit(): void {

    this.ProfitService.getProfit().subscribe((data)=>{
    this.profits = data as any;
    });
  }

}
