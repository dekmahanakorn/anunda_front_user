import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DatabaseService } from 'src/app/components/services/database.service';

import getYouTubeID from 'get-youtube-id';
import { DomSanitizer } from '@angular/platform-browser';

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

  idView: string;
  show_video: any;
  baseUrl: string = 'https://www.youtube.com/embed/';

  constructor(private serviceDatabase: DatabaseService,
    private firestore: AngularFirestore,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.productID = localStorage.getItem('Product_id')
    this.getProduct();
    this.getProduct_spec();
    this.getProduct_video();

  }

  gotoIndex() {
    localStorage.setItem('reload_index', 'reload');
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

          inner.idView = getYouTubeID(doc.data().url);

        }
      })
      inner.show_video = inner.sanitizer.bypassSecurityTrustResourceUrl(inner.baseUrl + inner.idView)

    })
  }

}
