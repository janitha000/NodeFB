import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../web-socket.service'
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages : string[] = [];
  chatForm : FormGroup;

  constructor(private socketService: WebSocketService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.socketService.getMessages() 
      .subscribe((message : string) => {
        console.log(message);
        this.messages.push(message);
        console.log(this.messages);
      })

      this.chatForm = this.formBuilder.group({
        message: ['']
      });
  }

  sendMessage() {
    this.socketService.sendMessage(this.chatForm.controls.message.value);
    this.chatForm.controls.message.setValue("");
  }

}
