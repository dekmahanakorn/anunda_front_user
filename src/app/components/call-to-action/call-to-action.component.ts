import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DatabaseService } from 'src/app/components/services/database.service';
import { Router } from '@angular/router';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.css']
})
export class CallToActionComponent implements OnInit {

  queryRef: any;
  cateRandom: any[] = [];



  constructor(private firestore: AngularFirestore,
    private serviceDatabase: DatabaseService,
    private router: Router, ) {

  }

  ngOnInit() {
    AOS.init();
    this.getCategory();
  }

  /*   randomArray() {
      let myShows = ['Bones', 'Psych', 'Big Bang Theory', 'Mad Men',
        'Breaking Bad', 'Modern Family', 'Game of Thrones', 'Dexter'];
  
      let show = myShows[Math.floor(Math.random() * myShows.length)];
      console.log(show);
    } */

  getCategory() {
    var inner = this;
    this.firestore.collection("category").get().subscribe(function (query) {
      query.forEach(function (doc) {
        inner.cateRandom.push(Object.assign({}, doc.data()));
      })

      inner.queryRef = inner.cateRandom[Math.floor(Math.random() * inner.cateRandom.length)];
    })
  }


}
