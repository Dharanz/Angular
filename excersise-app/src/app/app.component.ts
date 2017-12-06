import { isFavoriteEventArgs } from './favorite/favorite.component';
import { Component, transition } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post={
    title : 'Title',
    isFavorite :false,
    text:""
  }

  tweet={
    isSelected :false,
    likeCount:10
    }

  onFavoriteChanged(eventArgs: isFavoriteEventArgs){
    console.log('changed', eventArgs);
  }
}
