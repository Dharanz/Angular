import { Component } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent{
  log(ngModel){
    console.log(ngModel);
  }

  contactMethod=[
    { id:1, name:'Email'},
    { id:2, name:'Phone'}
  ];
}
