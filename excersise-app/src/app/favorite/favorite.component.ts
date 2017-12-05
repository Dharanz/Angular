import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input('isFavorite') isSelected:boolean;
  @Input('text') text:string;
  @Output('change') change=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onclick(){
    this.isSelected=!this.isSelected;
    this.text= (this.isSelected) ? "Added to Favorite" : "";
    this.change.emit({newValue: this.isSelected});
  }
}


export interface isFavoriteEventArgs{
  newValue: boolean;
}
