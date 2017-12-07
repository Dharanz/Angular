import { Component } from '@angular/core';

@Component({
  selector: 'directive-examples',
  templateUrl: './directive-examples.component.html',
  styleUrls: ['./directive-examples.component.css']
})
export class DirectiveExamplesComponent {

  coursesList=[1,2];

  viewMode="map";

  //viewCourses="map";   ///ngIf tabs

  courses=[
   {id:1, name:'C1'},
   {id:2, name:'C2'},
   {id:3, name:'C3'}
  ];

  onAdd(){
    this.courses.push({id:4,name:'c4'});
  }

  onRemove(course){
    let index=this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onChange(course){
    let index=this.courses.indexOf(course);
    if(index==2){
      course.name= index + 'updated';
    }else{
      course.name= 'updated';
    }
    
  }
}
