import { Component, input } from '@angular/core';
import { Community } from '@model/entity/Community';

@Component({
  selector: 'chat-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderChat {
  community = input<Community | null>(null);
}
