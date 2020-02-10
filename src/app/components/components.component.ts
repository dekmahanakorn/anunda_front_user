import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  i: any

  constructor(private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
    this.i = localStorage.getItem('reload_index')
    this.reload();
    this.spinner_load();


  }

  reload() {
    if (this.i == 'reload') {
      localStorage.setItem('reload_index', 'null');
      window.location.reload();
    }
  }

  spinner_load() {
    if (this.i == 'null') {
      this.spinner.show();
      document.body.style.position = 'fixed';

      setTimeout(() => {
        /** spinner ends after 5 seconds */
        document.body.style.position = '';

        this.spinner.hide();
      }, 4000);
    }
  }

}
