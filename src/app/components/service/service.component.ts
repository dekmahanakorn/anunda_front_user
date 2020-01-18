import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/components/services/database.service';
import { Category } from 'src/app/components/model/category.model';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  listCate: Array<Category> = [];
  dataCate: any


  constructor(private service: DatabaseService,
    private router: Router,
    private firestore: AngularFirestore) { }

  ngOnInit() {
    this.getCategory();

    /*   this.getData(); */
  }
  /*   link() { 
    this.router.navigate(['/cate-iot']);
  } */

  getCategory() {
    var inner = this;
    this.firestore.collection("category").get().subscribe(function (query) {
      query.forEach(function (doc) {

        if (doc.data().Name == 'RF & Microwave product') {
          inner.dataCate = Object.assign({}, doc.data());
          inner.dataCate.link = '/cate-rf-microwave';
          inner.listCate.push(inner.dataCate);

        }
        if (doc.data().Name == 'IoT') {
          inner.dataCate = Object.assign({}, doc.data());
          inner.dataCate.link = '/cate-iot';
          inner.listCate.push(inner.dataCate);

        }
        if (doc.data().Name == 'Kiosk & Vending machine') {
          inner.dataCate = Object.assign({}, doc.data());
          inner.dataCate.link = '/cate-kiosk';
          inner.listCate.push(inner.dataCate);

        }
        if (doc.data().Name == 'RF Passive product') {
          inner.dataCate = Object.assign({}, doc.data());
          inner.dataCate.link = '/cate-rf-passive';
          inner.listCate.push(inner.dataCate);

        }

      })
    })
  }



}
