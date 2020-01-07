import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { contact } from '../model/contact.model';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  public contact: contact;
  public contactList: contact[];

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.getContact();
  }

  getContact(){
    this.databaseService.getData('Contact').subscribe(actionArray => {
      this.contactList = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as contact;
      });
    });
  }
}
