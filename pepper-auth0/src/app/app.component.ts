import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private auth: AuthService){
    auth.handleAuthentication();
  }

  showProfile(){
    console.log(this.auth.userProfile);
  }

  // updateProfile(){
  //   var url='https://' + 'dharanz-m.auth0.com' + 'api/v2/users' + this.auth.userProfile.nickname;
  //   var data={
  //     user_metedata:{
  //       location: 'india'
  //     }
  //   };

  //    this.authHttp.patch(url, data)
  //     .subscribe(res => console.log(res));
  // }
}
