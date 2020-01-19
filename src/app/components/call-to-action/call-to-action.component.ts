import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DatabaseService } from 'src/app/components/services/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.css']
})
export class CallToActionComponent implements OnInit {

  queryRef: any



  constructor(private firestore: AngularFirestore,
    private serviceDatabase: DatabaseService,
    private router: Router, ) {

  }

  ngOnInit() {

  }

  randomArray() {
    let myShows = ['Bones', 'Psych', 'Big Bang Theory', 'Mad Men',
      'Breaking Bad', 'Modern Family', 'Game of Thrones', 'Dexter'];

    let show = myShows[Math.floor(Math.random() * myShows.length)];
    console.log(show);
  }


}
