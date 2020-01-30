import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-call-to-action-detail',
  templateUrl: './call-to-action-detail.component.html',
  styleUrls: ['./call-to-action-detail.component.css']
})
export class CallToActionDetailComponent implements OnInit {

  dataProfile: any[] = [];
  dataCate: any
  dataCate_micro: any
  dataCate_iot: any
  dataCate_kiosk: any
  dataCate_rf: any

  constructor(private firestore: AngularFirestore,
    private router: Router, ) { }

  ngOnInit() {
    this.getProfile();
    this.getCategory();
  }



  getProfile() {
    var inner = this;
    this.firestore.collection("profile").get().subscribe(function (query) {
      query.forEach(function (doc) {

        inner.dataProfile.push(Object.assign({}, doc.data()));

      })
    })
  }

  getCategory() {
    var inner = this;
    this.firestore.collection("category").get().subscribe(function (query) {
      query.forEach(function (doc) {
        if (doc.data().Name == 'RF & Microwave product') {
          inner.dataCate = Object.assign({}, doc.data());
          inner.dataCate.id = doc.id;
          inner.dataCate.link = '/cate-rf-microwave';
          inner.dataCate_micro = inner.dataCate;
        }
        if (doc.data().Name == 'IoT') {
          inner.dataCate = Object.assign({}, doc.data());
          inner.dataCate.id = doc.id;
          inner.dataCate.link = '/cate-iot';
          inner.dataCate_iot = inner.dataCate;
        }
        if (doc.data().Name == 'Kiosk & Vending machine') {
          inner.dataCate = Object.assign({}, doc.data());
          inner.dataCate.id = doc.id;
          inner.dataCate.link = '/cate-kiosk';
          inner.dataCate_kiosk = inner.dataCate;
        }
        if (doc.data().Name == 'RF Passive product') {
          inner.dataCate = Object.assign({}, doc.data());
          inner.dataCate.id = doc.id;
          inner.dataCate.link = '/cate-rf-passive';
          inner.dataCate_rf = inner.dataCate;
        }
      })
    })
  }

  onClick(id: string) {
    localStorage.setItem('Category_id', id);
  }

}
