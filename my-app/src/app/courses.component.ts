import { CoursesService } from './courses.service';
import {Component} from '@angular/core';
import { strictEqual } from 'assert';


@Component({
    selector:'courses',
    template:`
        <h1>{{ title }}</h1>  
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        <div>
            
        <button type="button" class="btn btn-outline-warning" [class.active]="isActive" [style.backgroundColor]="isActive ? 'blue' : 'green'">Warning</button>
        <button (click)="Save($event)">Save</button>
        <input type="text" [(ngModel)]="name" (keyup.enter)="onKeyUp()"/>
        </div><br />

        <div>
            {{course.title | uppercase | lowercase}}<br />
            {{course.students | number}}<br />
            {{course.prize | currency:'INR'}}<br />
            {{course.rating | number:'2.1-1'}}<br />
            {{course.date | date:'longDate'}}<br />
        </div><br />

        <div>
            {{testText | summary:75}}
        </div><br />
    `
})

export class CoursesComponent{
    isActive=true;
    title="List of courses";
    courses;

    textTitle;

    course={
        title:"Angular course",
        students:36512,
        prize:45.12,
        rating:8.4518,
        date:new Date(2017, 11, 2)
    }

    testText="Strategy analysis focuses on the long-term objective generating alternative strategies, and selecting strategies to pursue. The firm’s present strategies, objectives and mission, couple with the external and internal audit information, provide a basis for generating and evaluating feasible alternative strategies";



    constructor(service: CoursesService){
        this.courses=service.getCourse();
    }

    Save($event){
        console.log("clicked");
    }

    name="angular";

    onKeyUp(){
        console.log(this.name);
    }
}