import { Component } from '@angular/core';
import { HeaderChat } from '../header/header';
import { InputMessage } from '../input-message/input-message';
import { ChatMessage } from '../message/message';

@Component({
  selector: 'app-main',
  imports: [HeaderChat, InputMessage, ChatMessage],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class MainChat {}
