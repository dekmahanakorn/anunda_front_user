import { Component, OnInit } from '@angular/core';
import { Partner } from '../model/partner.model';
import { DatabaseService } from '../services/database.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoWidth: true,
    autoplay: true,
    autoplayHoverPause: true,
    dots: true,
    navSpeed: 500,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      100: {
        items: 2
      },
      440: {
        items: 3
      },
      640: {
        items: 4
      },
      940: {
        items: 5
      },
    },
    nav: true
  }

  partnerList: Partner[];

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.databaseService.getData('partner').subscribe(actionArray => {
      this.partnerList = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Partner;
      });
    });
  }
}
