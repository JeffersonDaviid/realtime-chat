import { inject, Injectable, signal } from '@angular/core';
import { Community } from '@model/entity/Community';
import { Message } from '@model/entity/Message';
import { AuthService } from './auth-service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  auth = inject(AuthService);

  currentCommunity = signal<Community | null>(null);

  addMessage(content: string) {
    if (!this.auth) return;

    const currentUser = this.auth.getUser();

    this.currentCommunity.update((community) => {
      if (!community) return community;

      const newMessage: Message = {
        _id:
          typeof crypto !== 'undefined' && 'randomUUID' in crypto
            ? (crypto as any).randomUUID()
            : Math.random().toString(36).slice(2),
        // _idOwner: currentUser.get,
        content,
        timestamp: Date.now(),
      };

      return { ...community, messages: [...community.messages, newMessage] };
    });
  }
}
