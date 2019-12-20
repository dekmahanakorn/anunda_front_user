import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/components/services/database.service';
import { Category } from 'src/app/components/model/category.model';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  /* public listIcon = [{
    icon_code: "fa fa-bar-chart fa-spin",
  }, {
    icon_code: "fa fa-bar-chart fa-spin",
  }, {
    icon_code: "fa fa-bar-chart fa-spin",
  }, {
    icon_code: "fa fa-bar-chart fa-spin",
  }]; */
  listCate: Category[];


  constructor(private service: DatabaseService) { }

  ngOnInit() {

    this.getData();
  }


  getData() {
    this.service.getData('category').subscribe(actionArray => {
      this.listCate = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Category;
      })
    })
  }



}
