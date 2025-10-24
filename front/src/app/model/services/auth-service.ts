import { Injectable, signal } from '@angular/core';
import { MOCK_USER, User } from '@model/entity/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser = signal<User | null>(null);

  getUser() {
    return this.currentUser();
  }

  resetUser() {
    this.currentUser.set(null);
  }

  login(email: string, password: string) {
    this.currentUser.set(MOCK_USER);
  }

  logout() {
    this.currentUser.set(null);
  }
}
