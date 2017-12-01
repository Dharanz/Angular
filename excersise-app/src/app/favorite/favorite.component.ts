import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  isFavorite:boolean;

  constructor() { }

  ngOnInit() {
  }

  onclick(){
    this.isFavorite=!this.isFavorite;
  }

  getStyle(){
    return this.isFavorite ? "visible" : "hidden";
  }
}
