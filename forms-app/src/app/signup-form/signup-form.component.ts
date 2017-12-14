import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserNameValidator } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form=new FormGroup({
    // username: new FormControl('', [
    //   Validators.required,
    //   Validators.minLength(7),
    //   Validators.pattern('Angular4'),
    //   UserNameValidator.CannotContainSpace
    // ]),
    username: new FormControl('', Validators.required, UserNameValidator.ShouldBeUnique),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  });

  log(x){
    console.log(x);
  }

  get username(){
    return this.form.get('username');
  }
  get password(){
    return this.form.get('password');
  }
}
