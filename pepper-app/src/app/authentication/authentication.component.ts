import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  displayName;
  photoURL;
  constructor(private af: AngularFire) { }

  ngOnInit() {
    this.af.auth.subscribe(authState => {
      if(!authState) {
          this.displayName=null;
          this.photoURL=null;
          return;
        }

        console.log("Authstate:", authState);

        this.displayName=authState.auth.displayName;
        this.photoURL=authState.auth.photoURL;
    });
  }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    })
    .then((authState:any) => {
      this.af.database.object('/users/' + authState.uid).update({
        accessToken: authState.google.accessToken
      });
      console.log(authState);
    })
  }

  logout() {
    this.af.auth.logout();
  }
}
