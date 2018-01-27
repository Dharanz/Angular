import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "angularfire2";


import { AppComponent } from './app.component';

export const firbaseConfig = {
  apiKey: "AIzaSyCRzZE2ipLFnLTQbGjInL0HsUodC0Xb-j4",
  authDomain: "pepper-29a74.firebaseapp.com",
  databaseURL: "https://pepper-29a74.firebaseio.com",
  projectId: "pepper-29a74",
  storageBucket: "pepper-29a74.appspot.com",
  messagingSenderId: "882316859897"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firbaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
