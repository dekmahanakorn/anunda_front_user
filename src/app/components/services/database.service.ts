import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { SendMessageModel } from '../model/send-message-model';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  productID: any;
  categoryID: any;

  constructor(private firestore: AngularFirestore) { }

  getData(collection: string) {
    return this.firestore.collection(collection).snapshotChanges();
  }

  setSendMessage(sendMessageModel: SendMessageModel) {
    this.firestore.collection('message').add(sendMessageModel).then( ref => ref.id);
  }
}
