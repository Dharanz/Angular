import { CoursesService } from './courses.service';
import {Component} from '@angular/core';


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
        <input type="text" (keyup.enter)="onKeyUp()"/>
        </div>
    `
})

export class CoursesComponent{
    isActive=true;
    title="List of courses";
    courses;

    constructor(service: CoursesService){
        this.courses=service.getCourse();
    }

    Save($event){
        console.log("clicked");
    }

    onKeyUp(){
        console.log("Entered");
    }
}