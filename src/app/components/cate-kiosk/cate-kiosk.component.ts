import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DatabaseService } from 'src/app/components/services/database.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cate-kiosk',
  templateUrl: './cate-kiosk.component.html',
  styleUrls: ['./cate-kiosk.component.css']
})
export class CateKioskComponent implements OnInit {

  firstInResponse: any = [];
  tableData: any[] = [];
  lastInResponse: any = [];

  prev_strt_at: any = [];

  pagination_clicked_count = 0;
  disable_next: boolean = false;
  disable_prev: boolean = false;

  categoryID: string
  dataModel: any
  dataCate: any
  data: any

  constructor(private firestore: AngularFirestore,
    private serviceDatabase: DatabaseService,
    private router: Router, ) {
  }

  ngOnInit() {
    this.categoryID = localStorage.getItem('Category_id')
    this.loadItems();
    this.getCategory();
  }


  loadItems() {
    this.firestore.collection('product', ref => ref
      .where("category_id", "==", this.categoryID)
      .orderBy('timestamp', 'desc')
      .limit(6)
    ).snapshotChanges()
      .subscribe(response => {
        if (!response.length) {
          console.log("No Data Available");
          return false;
        }

        this.firstInResponse = response[0].payload.doc;
        this.lastInResponse = response[response.length - 1].payload.doc;

        this.tableData = [];
        for (let item of response) {
          this.data = item.payload.doc.data()
          this.data.id = item.payload.doc.id;
          this.tableData.push(this.data);

        }

        console.log('tableData : ', this.tableData);

        //Initialize values
        this.prev_strt_at = [];
        this.pagination_clicked_count = 0;
        this.disable_next = false;
        this.disable_prev = false;

        //Push first item to use for Previous action
        this.push_prev_startAt(this.firstInResponse);
      }, error => {
      });
  }

  prevPage() {
    this.disable_prev = true;
    this.firestore.collection('product', ref => ref
      .where("category_id", "==", this.categoryID)
      .orderBy('timestamp', 'desc')
      .startAt(this.get_prev_startAt())
      .endBefore(this.firstInResponse)
      .limit(6)
    ).get()
      .subscribe(response => {
        this.firstInResponse = response.docs[0];
        this.lastInResponse = response.docs[response.docs.length - 1];

        this.tableData = [];
        for (let item of response.docs) {
          this.data = item.data();
          this.data.id = item.id;
          this.tableData.push(this.data);
        }

        //Maintaing page no.
        this.pagination_clicked_count--;

        //Pop not required value in array
        this.pop_prev_startAt(this.firstInResponse);

        //Enable buttons again
        this.disable_prev = false;
        this.disable_next = false;
      }, error => {
        this.disable_prev = false;
      });
  }

  nextPage() {
    this.disable_next = true;
    this.firestore.collection('product', ref => ref
      .where("category_id", "==", this.categoryID)
      .orderBy('timestamp', 'desc')
      .limit(6)
      .startAfter(this.lastInResponse)
    ).get()
      .subscribe(response => {

        if (!response.docs.length) {
          this.disable_next = true;
          return;
        }

        this.firstInResponse = response.docs[0];

        this.lastInResponse = response.docs[response.docs.length - 1];
        this.tableData = [];
        for (let item of response.docs) {

          this.data = item.data();
          this.data.id = item.id;
          this.tableData.push(this.data);
        }

        this.pagination_clicked_count++;

        this.push_prev_startAt(this.firstInResponse);

        this.disable_next = false;
      }, error => {
        this.disable_next = false;
      });
  }

  push_prev_startAt(prev_first_doc) {
    this.prev_strt_at.push(prev_first_doc);
  }

  pop_prev_startAt(prev_first_doc) {
    this.prev_strt_at.forEach(element => {
      if (prev_first_doc.data().id == element.data().id) {
        element = null;
      }
    });
  }

  get_prev_startAt() {
    if (this.prev_strt_at.length > (this.pagination_clicked_count + 1))
      this.prev_strt_at.splice(this.prev_strt_at.length - 2, this.prev_strt_at.length - 1);
    return this.prev_strt_at[this.pagination_clicked_count - 1];
  }


  modal(data: any) {
    this.dataModel = data;
  }
  getCategory() {
    var inner = this;
    this.firestore.collection("category").get().subscribe(function (query) {
      query.forEach(function (doc) {
        if (doc.id == inner.categoryID) {
          inner.dataCate = Object.assign({}, doc.data());
        }
      })
    })
  }

  linkDetail(id: string) {
    localStorage.setItem('Product_id', id);
    this.router.navigate(['/product-detail']);
  }


}
