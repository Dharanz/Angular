import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CoursesFormComponent } from './courses-form/courses-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCoursesComponent } from './new-courses/new-courses.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    CoursesFormComponent,
    SignupFormComponent,
    NewCoursesComponent,
    ChangePasswordComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ContactFormComponent },
      { path: 'courses', component: CoursesFormComponent },
      { path: 'signup', component: SignupFormComponent },
      { path: 'newcourse', component: NewCoursesComponent },
      { path: 'changepassword', component: ChangePasswordComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
