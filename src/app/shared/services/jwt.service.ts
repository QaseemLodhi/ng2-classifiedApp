import { Injectable } from '@angular/core';


@Injectable()
export class JwtService {

  getToken(): String {
    // return window.localStorage['jwtToken'];
    return localStorage.getItem('jwtToken');  
  }

  saveToken(token: any) {
    // window.localStorage['jwtToken'] = token;
      localStorage.setItem('jwtToken', token);
  }

  destroyToken() {
    // window.localStorage.removeItem('jwtToken');
    localStorage.removeItem('jwtToken');
  }

}
