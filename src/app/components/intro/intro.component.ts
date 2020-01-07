import { Component, OnInit } from '@angular/core';
import { IntroProfile } from '../model/intro-profile.model';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  public profile: IntroProfile;
  public profileList: IntroProfile[];

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.getProfile();
  }
  getProfile() {
    this.databaseService.getData('profile').subscribe(actionArray => {
      this.profileList = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as IntroProfile;
      });
    });
  }
}
