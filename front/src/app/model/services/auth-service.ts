import { Injectable, signal } from '@angular/core';
import { User } from '@model/entity/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser = signal<User | null>(null);

  getUser() {
    return this.currentUser;
  }

  getUserId(): string | null {
    return this.currentUser()?._id ?? null;
  }
}
