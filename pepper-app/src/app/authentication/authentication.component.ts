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
    //Provider Verfication
    // this.af.auth.subscribe(authState => {
    //   if(!authState) {
    //       this.displayName=null;
    //       this.photoURL=null;
    //       return;
    //     }

    //     console.log("Authstate:", authState);

    //     this.displayName=authState.auth.displayName;
    //     this.photoURL=authState.auth.photoURL;
    // });

    //email/password verfication
    this.af.auth.subscribe(authState => {      
    });
  }

  //Provider Verfication
  // login() {
  //   this.af.auth.login({
  //     provider: AuthProviders.Google,
  //     method: AuthMethods.Popup
  //   })
  //   .then((authState:any) => {
  //     this.af.database.object('/users/' + authState.uid).update({
  //       accessToken: authState.google.accessToken
  //     });
  //     console.log(authState);
  //   })
  // }

  //Email/Password Verification
  register(){
    this.af.auth.createUser({
      email:'muralidharan@gmail.com',
      password: '12345;-'
    })
    .then(authState => {
      authState.auth.sendEmailVerification(); //Verify user before logged in.
    })
    .catch(error => console.log('Register-error', error))
  }

  login(){
    this.af.auth.login({
      email:'muralidharan@gmail.com',
      password: '12345;-'
    }, {
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    })
    .then(authState => console.log('login-then', authState))
    .catch(error => console.log('Login-error', error))
  }

  logout() {
    this.af.auth.logout();
    alert('Logged Out!');
  }
}
