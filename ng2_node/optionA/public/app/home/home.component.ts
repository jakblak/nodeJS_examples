import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
    moduleId: module.id,
    selector: 'ch-home',
    styleUrls: ['home.styles.css'],
    templateUrl: 'home.template.html'
})

export class HomeComponent implements OnInit {
    messageText: string;
    messages: Array<any>;
    socket: SocketIOClient.Socket;

  constructor() {
   // this.socket = io.connect('http://localhost:8000');
   this.socket = io.connect();
  }

  ngOnInit() {
        this.messages = new Array();

        this.socket.on('message-received', (msg: any) => {
            this.messages.push(msg);
            console.log(msg);
            console.log(this.messages);
        });
      this.socket.emit('event1', {
          msg: 'Client to server, can you hear me server?'
      });
      this.socket.on('event2', (data: any) => {
        console.log(data.msg);
        this.socket.emit('event3', {
            msg: 'Yes, its working for me!!'
        });
      });
      this.socket.on('event4', (data: any) => {
          console.log(data.msg);
      });
   }

   sendMessage() {
    const message = {
      text: this.messageText
    };
    this.socket.emit('send-message', message);
    // console.log(message.text);
    this.messageText = '';
  }

}
