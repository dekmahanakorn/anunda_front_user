import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DatabaseService } from 'src/app/components/services/database.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productID: string
  dataProduct: any
  dataProduct_spec: any
  dataProduct_video: any

  constructor(private serviceDatabase: DatabaseService,
    private firestore: AngularFirestore, ) { }

  ngOnInit() {
    this.productID = this.serviceDatabase.getProduct_ID();
    this.getProduct();
    this.getProduct_spec();

  }

  getProduct() {
    var inner = this;
    this.firestore.collection("product").get().subscribe(function (query) {
      query.forEach(function (doc) {
        if (doc.id == inner.productID) {
          inner.dataProduct = Object.assign({}, doc.data());
        }
      })
    })
  }

  getProduct_spec() {
    var inner = this;
    this.firestore.collection("product-spec").get().subscribe(function (query) {
      query.forEach(function (doc) {
        if (doc.data().product_id == inner.productID) {
          inner.dataProduct_spec = Object.assign({}, doc.data());
        }
      })
    })
  }

  getProduct_video() {
    var inner = this;
    this.firestore.collection("product-video").get().subscribe(function (query) {
      query.forEach(function (doc) {
        if (doc.data().product_id == inner.productID) {
          inner.dataProduct_video = Object.assign({}, doc.data());
          console.log(inner.dataProduct_video.url)
        }
      })
    })
  }


}
