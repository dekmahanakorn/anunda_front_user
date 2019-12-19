import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-out-portfolio',
  templateUrl: './out-portfolio.component.html',
  styleUrls: ['./out-portfolio.component.css']
})
export class OutPortfolioComponent implements OnInit {

  private product: Product;
  private productList: Product[] = new Array(4);

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.getProductOwner();
  }
  getProductOwner() {
    this.databaseService.getData('product').subscribe(actionArray => {
      this.productList = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Product;
      });
      //test
      for (var i = 0; i < this.productList.length; i++) {
        console.log("product---->" + this.productList[i].image_url)
      }
    });
  }
}
