import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  cuisines: FirebaseListObservable<any[]>;
  restaurants: Observable<any[]>;
  exists;

  constructor(private af: AngularFire){
  }

  ngOnInit(){
    this.cuisines = this.af.database.list('/cuisines', {
      query: {
        orderByKey: true
      }
    });

    // this.restaurant = this.af.database.list('/restaurants')
    //   .map(restaurants => {
    //     console.log("BEFORE MAP", restaurants);
    //     restaurants.map(restaurant =>{
    //       restaurant.cuisineType=this.af.database.object('/cuisines/' + restaurant.cuisine);
    //     });
    //     return restaurants;
    //   });

    this.restaurants = this.af.database.list('/restaurants', {
      query: {
        orderByChild: 'rating',
        equalTo: 5,
        limitToLast: 10
      }
    })
      .map(restaurants => {
        restaurants.map(restaurant =>{
          restaurant.cuisineType=this.af.database.object('/cuisines/' + restaurant.cuisine);

          restaurant.featureTypes=[];
          for(var f in restaurant.features)
            restaurant.featureTypes.push(this.af.database.object('/features/' + f));
        });
        return restaurants;
      });

      this.exists=this.af.database.object('restaurants/1/features/1');

      // Multiple Updates
      // this.af.database.list('/restaurants').push({ name : '' })
      //   .then(x => {
      //     let restaurant = { name : 'New Restaurant' };
      //     let update={};

      //     update['restaurants/' + x.key] = null;
      //     update['restaurants-by-city/camberwell/' + x.key] = null;

      //     this.af.database.object('/').update(update);
      //   })

  }


// add(){
  //   this.cuisines.push({
  //     name: 'Asian',
  //     Details: {
  //       description: '...'
  //     }
  //   });
  // }

  // update(){
  //   this.restaurant.set({
  //     name: 'New Name',
  //     rating: 5
  //   });
  // }

  // remove(){
  //   this.af.database.object('/restaurant').remove()
  //     .then(x=> console.log("SUCCESS"))
  //     .catch(error => console.log("ERROR", error));
  // }

  
}
