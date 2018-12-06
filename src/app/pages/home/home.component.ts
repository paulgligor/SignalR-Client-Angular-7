import { Component, OnInit } from '@angular/core';
import { HubConnection } from '@aspnet/signalr';
import * as signalR from '@aspnet/signalr';
import { Message } from 'src/app/core/models/message.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
