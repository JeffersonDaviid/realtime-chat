import { Component, input } from '@angular/core';
import { Message } from '@model/entity/Message';

@Component({
  selector: 'chat-message',
  imports: [],
  templateUrl: './message.html',
  styleUrl: './message.css',
})
export class ChatMessage {
  message = input<Message>();
  ownerName = input<string>();
}
