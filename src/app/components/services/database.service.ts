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


}
