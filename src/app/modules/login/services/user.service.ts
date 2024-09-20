import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User | null = null;
  constructor() { }

  setUser(user: User) {
    this.user = user;
  }

  getUser(): User | null {
    return this.user;
  }

  clearUser() {
    this.user = null;
  }
}
