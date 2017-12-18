import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'new-courses',
  templateUrl: './new-courses.component.html',
  styleUrls: ['./new-courses.component.css']
})
export class NewCoursesComponent {

  newForm=new FormGroup({
    topics:new FormArray([])
  });

  addCourses(topic: HTMLInputElement){
    this.topics.push(new FormControl(topic.value));
    topic.value='';
  }

  get topics(){
    return this.newForm.get('topics') as FormArray;
  }

  removeTopic(topic: FormControl){
    let index=this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

}
