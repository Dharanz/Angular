import { Component, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

    @Input('isSelected') isSelected:Boolean;
    @Input('likeCount') likeCount:number;

    onclick(){
      this.isSelected=!this.isSelected;

      this.likeCount +=(!this.isSelected) ? -1 : 1;
    }

}
