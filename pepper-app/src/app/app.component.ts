import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  cuisines: FirebaseListObservable<any[]>;
  restaurant;

  constructor(private af: AngularFire){
  }

  ngOnInit(){
    this.cuisines = this.af.database.list('/cuisines');
    this.restaurant = this.af.database.object('/restaurant');
  }

  add(){
    this.cuisines.push({
      name: 'Asian',
      Details: {
        description: '...'
      }
    });
  }

  update(){
    this.restaurant.set({
      name: 'New Name',
      rating: 5
    });
  }

  remove(){
    this.af.database.object('/restaurant').remove()
      .then(x=> console.log("SUCCESS"))
      .catch(error => console.log("ERROR", error));
  }
}
