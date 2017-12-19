import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { OldPasswordValidator } from './OldPassword.validators';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  form :FormGroup;

  constructor(fb: FormBuilder){
    this.form=fb.group({
      oldPassword: ['',
      Validators.required, 
      OldPasswordValidator.CheckPassword],
     newPassword: ['', Validators.required],
     confirmPassword: ['', 
     Validators.required,
     ]
    }, {
      validator: OldPasswordValidator.ComparePasswords
    });
  }

  get oldPassword(){
    return this.form.get('oldPassword');
  }
  get newPassword(){
    return this.form.get('newPassword');
  }
  get confirmPassword(){
    return this.form.get('confirmPassword');
  }

  compare(confirmPassword){

  }
}
