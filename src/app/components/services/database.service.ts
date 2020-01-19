import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  productID: any
  categoryID: any

  constructor(private firestore: AngularFirestore) { }

  getData(collection: string) {
    return this.firestore.collection(collection).snapshotChanges();
  }



  setProduct_ID(id: string) {
    this.productID = id;
  }
  getProduct_ID() {
    return this.productID;
  }

  setCategory_ID(id: string) {
    this.categoryID = id;
  }
  getCategory_ID() {
    return this.categoryID;
  }
}
