import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false; 

  isAuthenticated() {
    return this.isLoggedIn;
  }
  constructor() { }
  setAuthenticated() {
    this.isLoggedIn = true;
  }
}
