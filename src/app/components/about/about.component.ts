import { Component, OnInit } from '@angular/core';
import { about } from '../model/about.model';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public about: about;
  public aboutList: about[];

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.getAbout();
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

}
