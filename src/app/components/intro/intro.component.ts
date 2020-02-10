import { Component, OnInit } from '@angular/core';
import { IntroProfile } from '../model/intro-profile.model';
import { DatabaseService } from '../services/database.service';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  dataProfile: any[] = [];

  constructor(private databaseService: DatabaseService,
    private firestore: AngularFirestore, ) { }

  ngOnInit() {
    this.getProfile();
  }
  getProfile() {
    var inner = this;
    this.firestore.collection("profile").get().subscribe(function (query) {
      query.forEach(function (doc) {
        inner.dataProfile.push(Object.assign({}, doc.data()));
      })
    })
  }

  img1() {
    return "url('" + this.dataProfile[0].image_url + "')";
  }
  img2() {
    return "url('" + this.dataProfile[1].image_url + "')";
  }
  img3() {
    return "url('" + this.dataProfile[2].image_url + "')";
  }
  img4() {
    return "url('" + this.dataProfile[3].image_url + "')";
  }
  img5() {
    return "url('" + this.dataProfile[4].image_url + "')";
  }

}
