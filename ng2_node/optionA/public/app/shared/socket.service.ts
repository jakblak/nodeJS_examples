import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {

  // constructor() {
  //   this.socket = io.connect('http://localhost:8000');
  //   this.socket.on("connection", () => console.log("this is onl a test"));
  // }

  // socket.on('event1', function (data) {
  //   console.log(data.msg);
  //   socket.emit('event2', { msg: 'Yes, its working for me !!' });
  // });

  // on(eventName: any, callback: any) {
  //     if (this.socket) {
  //       this.socket.on(eventName, function(data: any) {
  //         callback(data);
  //       });
  //     }
  //   };

  // emit(eventName: any, data: any) {
  //     if (this.socket) {
  //       this.socket.emit(eventName, data);
  //     }
  //   };

  // removeListener(eventName: any) {
  //     if (this.socket) {
  //       this.socket.removeListener(eventName);
  //     }
  //   };
}
