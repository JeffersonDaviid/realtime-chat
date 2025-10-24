import { Component, inject } from '@angular/core';
import { HeaderChat } from '../header/header';
import { InputMessage } from '../input-message/input-message';
import { ChatMessage } from '../message/message';
import { ChatService } from '@model/services/chat-service';

@Component({
  selector: 'app-main',
  imports: [HeaderChat, InputMessage, ChatMessage],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class MainChat {
  protected chatService = inject(ChatService);

  getMemberName(idOwner: string) {
    return this.chatService.getCommunity()?.members.find((m) => m.id === idOwner)?.name || '';
  }

  receiveMessage($event: string) {
    console.log('El mensaje fue', $event);
    this.chatService.addMessage($event);
  }
}
