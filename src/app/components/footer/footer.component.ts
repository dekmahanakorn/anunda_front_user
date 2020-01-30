import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { about } from '../model/about.model';
import { Category } from '../model/category.model';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { contact } from '../model/contact.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public about: about;
  public aboutList: about[];

  listCate: Array<Category> = [];
  dataCate: any

  public contactList: contact[];
  public contact: contact;

  constructor(private databaseService: DatabaseService, private router: Router,private firestore: AngularFirestore) { }

  ngOnInit() {
    this.getAbout();
    this.getCategory();
    this.getContact();
  }

  getAbout() {
    this.databaseService.getData('About').subscribe(actionArray => {
      this.aboutList = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as about;
      });
    });
  }

  getCategory() {
    var inner = this;
    this.firestore.collection("category").get().subscribe(function (query) {
      query.forEach(function (doc) {

        if (doc.data().Name == 'RF & Microwave product') {
          inner.dataCate = Object.assign({}, doc.data());
          inner.dataCate.id = doc.id;
          inner.dataCate.link = '/cate-rf-microwave';
          inner.listCate.push(inner.dataCate);

        }
        if (doc.data().Name == 'IoT') {
          inner.dataCate = Object.assign({}, doc.data());
          inner.dataCate.id = doc.id;
          inner.dataCate.link = '/cate-iot';
          inner.listCate.push(inner.dataCate);

        }
        if (doc.data().Name == 'Kiosk & Vending machine') {
          inner.dataCate = Object.assign({}, doc.data());
          inner.dataCate.id = doc.id;
          inner.dataCate.link = '/cate-kiosk';
          inner.listCate.push(inner.dataCate);

        }
        if (doc.data().Name == 'RF Passive product') {
          inner.dataCate = Object.assign({}, doc.data());
          inner.dataCate.id = doc.id;
          inner.dataCate.link = '/cate-rf-passive';
          inner.listCate.push(inner.dataCate);

        }

      })
    })
  }

  getContact() {
    this.databaseService.getData('Contact').subscribe(actionArray => {
      this.contactList = actionArray.map(item => {
       return {
         id: item.payload.doc.id,
         ...item.payload.doc.data()
       } as contact;
     });
   });
  }

  setLink(id: string) {
    localStorage.setItem('Category_id', id);
  }

}
