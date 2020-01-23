import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SendMessageModel } from '../../model/send-message-model';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {
  private sendMsg: FormGroup;
  private sendMessage: SendMessageModel = {};
  constructor(private formBuilder: FormBuilder, private DbService: DatabaseService) {

    this.sendMsg = this.formBuilder.group({
      username : [null, ],
      email : [null, ],
      subject : [null, ],
      message : [null, ],
      dataTime : [null, ],
    });
  }

  ngOnInit() {
  }

  getFormData(): void {

    this.sendMessage = {
      username: this.sendMsg.controls.username.value,
      email: this.sendMsg.controls.email.value,
      subject: this.sendMsg.controls.subject.value,
      message: this.sendMsg.controls.message.value,
      dataTime: Date.now() };
    console.log(this.sendMessage );

    console.log( this.DbService.setSendMessage(this.sendMessage));

  }

}
