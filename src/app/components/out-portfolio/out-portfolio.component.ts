import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-out-portfolio',
  templateUrl: './out-portfolio.component.html',
  styleUrls: ['./out-portfolio.component.css']
})
export class OutPortfolioComponent implements OnInit {

  public product: Product;
  public productList: Product[] = new Array(4);

  tableData: any[] = [];
  data: any

  constructor(private databaseService: DatabaseService,
    private firestore: AngularFirestore,
    private router: Router, ) { }

  ngOnInit() {
    /*     this.getProductOwner(); */
    this.loadItems();
  }
  /*  getProductOwner() {
     this.databaseService.getData('product-solution').subscribe(actionArray => {
       this.productList = actionArray.map(item => {
         return {
           id: item.payload.doc.id,
           ...item.payload.doc.data()
         } as Product;
       });
     });
   } */

  loadItems() {
    this.firestore.collection('product-solution', ref => ref
      .limit(8)
    ).snapshotChanges()
      .subscribe(response => {
        if (!response.length) {
          console.log("No Data Available");
          return false;
        }

        this.tableData = [];
        for (let item of response) {
          this.data = item.payload.doc.data()
          this.data.id = item.payload.doc.id;
          this.tableData.push(this.data);
        }

      }, error => {

      });
  }

  setLink(id: string) {
    this.databaseService.setProduct_ID(id);
    this.router.navigate(['/product-so-detail']);
  }




}
