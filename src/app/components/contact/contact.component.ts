import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { contact } from '../model/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contactList: contact[];
  public contact: contact;
  constructor(private databaseService: DatabaseService) {

  }

  ngOnInit() {
    this.test();

  }

  test() {
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
