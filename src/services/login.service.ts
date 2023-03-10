import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn: boolean = false;

  constructor() {}

  login(data: any) {
    if (data === 'VALID') {
      this.isLoggedIn = true;
    }
    return this.isLoggedIn;
  }
}
