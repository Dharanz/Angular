import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AngularFire } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
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
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
