import { Injectable, signal } from '@angular/core';
import { User } from '@model/entity/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser = signal<User | null>({
    _id: 'adivina',
    cedula: '1752768999',
    name: 'Jefferson',
    lastName: 'Chileno',
    email: 'jefferson.chileno@example.com',
    address: 'Quito - Guaraní',
    myCommunities: [{ id: 'alsdkjflskdf', name: 'Desarrollo web' }],
    communitiesJoined: [
      {
        id: 'adsldkfj',
        name: 'Grupo Angular',
      },
    ],
  });

  getUser() {
    return this.currentUser();
  }

  resetUser() {
    this.currentUser.set(null);
  }

  login(email: string, password: string) {
    this.currentUser.set({
      _id: `${Date.now()} f`,
      cedula: '1752768999',
      name: 'Jefferson',
      lastName: 'Chileno',
      email,
      address: 'Quito - Guaraní',
      communitiesJoined: [
        {
          id: 'adsldkfj',
          name: 'Grupo Angular',
        },
      ],
      myCommunities: [{ id: 'alsdkjflskdf', name: 'Desarrollo web' }],
    });
  }

  logout() {
    this.currentUser.set(null);
  }
}
