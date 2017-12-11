import { Component } from '@angular/core';

@Component({
  selector: 'courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.css']
})
export class CoursesFormComponent {
  categories=[
    {id:1, name:'Development'},
    {id:2, name:'Art'},
    {id:3, name:'Languages'}
  ];

  submit(courses){
    console.log(courses);
  }
}
