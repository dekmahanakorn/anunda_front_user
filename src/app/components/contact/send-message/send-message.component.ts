import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SendMessageModel } from '../../model/send-message-model';
import { DatabaseService } from '../../services/database.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {
  private sendMsg: FormGroup;
  private sendMessage: SendMessageModel = {};
  constructor(private formBuilder: FormBuilder,
    private DbService: DatabaseService,
    private toastr: ToastrService) {

    this.sendMsg = this.formBuilder.group({
      username: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      subject: [null, [Validators.required]],
      message: [null, [Validators.required]],
      dataTime: [null,],
    });
  }

  ngOnInit() {
  }

  getFormData() {
    this.toastr.success('Hello world!');

    this.sendMessage = {
      username: this.sendMsg.controls.username.value,
      email: this.sendMsg.controls.email.value,
      subject: this.sendMsg.controls.subject.value,
      message: this.sendMsg.controls.message.value,
      dataTime: Date.now()
    };
    console.log(this.sendMessage);
    // this.sendMsg.valid
    if (this.sendMsg.valid) {
      alert('Done');
      this.DbService.setSendMessage(this.sendMessage);
      this.sendMsg.controls.username.setValue(undefined);
      this.sendMsg.controls.email.setValue(undefined);
      this.sendMsg.controls.subject.setValue(undefined);
      this.sendMsg.controls.message.setValue(undefined);
      this.sendMsg.controls.dataTime.setValue(undefined);
      this.sendMessage = null;
      location.reload();
    }



  }

}
