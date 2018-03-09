import { Injectable } from '@angular/core';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';

declare var Auth0Lock:any;

@Injectable()
export class AuthService {

    auth0 = new auth0.WebAuth({
        clientID: 'rsPQFTGbF2XLHBQcQ7HexptVIkWvGneQ',
        domain: 'dharanz-m.auth0.com',
        responseType: 'token id_token',
        audience: 'https://dharanz-m.auth0.com/userinfo',
        redirectUri: 'http://localhost:4200',
        scope: 'openid'
      });

      public handleAuthentication(): void {
        this.auth0.parseHash((err, authResult) => {
          if (authResult && authResult.accessToken && authResult.idToken) {
            window.location.hash = '';

            const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
            localStorage.setItem('access_token', authResult.accessToken);
            localStorage.setItem('id_token', authResult.idToken);
            localStorage.setItem('expires_at', expiresAt);

          } else if (err) {
            console.log(err);
          }
        });
      }

    public login(){
        this.auth0.authorize();
    }

    public isAuthenticated() {
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
      //return tokenNotExpired;
      }

    public logout(): void {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
      }
}