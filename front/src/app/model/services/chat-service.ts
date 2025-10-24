import { inject, Injectable, signal } from '@angular/core';
import { Community, MOCK_COMMUNITY } from '@model/entity/Community';
import { Message } from '@model/entity/Message';
import { AuthService } from './auth-service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private auth = inject(AuthService);
  private currentCommunity = signal<Community | null>(MOCK_COMMUNITY);

  addMessage(content: string) {
    const currentUser = this.auth.getUser();

    if (!currentUser || !this.currentCommunity()) return;

    this.currentCommunity.update((community) => {
      if (community === null) return community;

      const newMessage: Message = {
        id:
          typeof crypto !== 'undefined' && 'randomUUID' in crypto
            ? (crypto as any).randomUUID()
            : Math.random().toString(36).slice(2),
        idOwner: currentUser.id,
        content,
        timestamp: Date.now(),
      };

      return { ...community, messages: [...community.messages, newMessage] };
    });
  }

  getCommunity() {
    return this.currentCommunity();
  }
}
