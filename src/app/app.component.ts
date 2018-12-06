import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { Message } from './models/message.model';
import * as signalR from '@aspnet/signalr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  public messages: Message[] = [];
  public message: Message = new Message();
  private connection: HubConnection;

  constructor() { }

  ngOnInit(): void {
    const builder = new signalR.HubConnectionBuilder();
    this.connection = builder
      .withUrl('http://localhost:52525/hubs/messaging')
      .build();

    this.connection.start()
    .then(() => {
      console.log('started');
      //
    });

    this.connection.on('BroadcastMessage', (message: Message) => {
      console.log('BroadcastMessage', message);
      this.messages.push(message);
    });

    this.messages.push({ name: 'init', text: 'hello, it\'s me init'  });
  }

  sendMessage() {
    this.connection.invoke('BroadcastMessage', this.message);
    this.message = new Message();
  }
}
