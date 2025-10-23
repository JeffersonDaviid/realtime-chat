import { inject, Injectable, signal } from '@angular/core';
import { Community } from '@model/entity/Community';
import { Message } from '@model/entity/Message';
import { AuthService } from './auth-service';
import { User } from '@model/entity/user';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private auth = inject(AuthService);
  private currentCommunity = signal<Community | null>({
    _id: 'adivina',
    name: 'Angular Pro',
    description: 'Grupo de programación para compartir tips',
    members: [] as User[],
    messages: [] as Message[],
  });

  addMessage(content: string) {
    console.log(this.currentCommunity());
    const currentUser = this.auth.getUser();

    console.log(currentUser);
    console.log(this.currentCommunity);

    if (!currentUser || !this.currentCommunity()) return;
    console.log('update');

    this.currentCommunity.update((community) => {
      if (community === null) return community;

      const newMessage: Message = {
        _id:
          typeof crypto !== 'undefined' && 'randomUUID' in crypto
            ? (crypto as any).randomUUID()
            : Math.random().toString(36).slice(2),
        _idOwner: currentUser._id,
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
