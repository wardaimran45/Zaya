import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false; // Initially, the user is not logged in

  isAuthenticated() {
    return this.isLoggedIn;
  }
  constructor() { }
  setAuthenticated() {
    this.isLoggedIn = true;
  }
}
