import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';


@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket;

  constructor() {
    this.socket = io('http://localhost:3000');
  }

  public sendMessage(message) {
    this.socket.emit('newMessage', message);
  }

  // public getMessages = () => {
  //   return Observable.create((observer) => {
  //     this.socket.on('newMessage', (message) => {
  //       observer.next(message);
  //     });
  //   });
  // }

  public getMessages(): Observable<any> {
        return new Observable<any>(observer => {
            this.socket.on('newMessage', (message: string) => observer.next(message));
        });
    }
}
