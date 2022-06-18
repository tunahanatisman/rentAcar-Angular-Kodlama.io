import { Injectable } from '@angular/core';
import { User } from '../components/login/user';

@Injectable()
export class AccountService {
  isAccounticated() {
    throw new Error('Method not implemented.');
  }
  constructor() {}
loggedIn=false;
  login(user: User): boolean {
    if (user.email == 'tunahanatisman7@gmail.com' && user.password == '12345') {
      return true;
      this.loggedIn=true;
      localStorage.setItem("isLogged",user.email);
    }
    return false;
  }
  isLoggedIn(){
    return this.loggedIn;
  }
  logOut(){
    localStorage.removeItem("isLogged");
    this.loggedIn=false;
  }
}
