import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  isLoggedIn(): boolean {
    if(localStorage.getItem("user")){
      return true;
    }else{
      return false;
    }
    
  }
}
