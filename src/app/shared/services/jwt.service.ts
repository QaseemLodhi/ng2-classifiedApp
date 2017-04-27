import { Injectable } from '@angular/core';


@Injectable()
export class JwtService {

  getToken(): any {
    return window.localStorage['jwtToken'];
  }

  saveToken(token: any) {
    window.localStorage['jwtToken'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('jwtToken');
  }

}
