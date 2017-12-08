import { Component, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {

  @Input('isActive') isActive:boolean;
  @Input('isActiveContent') isActiveContent:boolean;
  @Input('title') title:string="Shipping Details";
  @Input('billingtTitle') billingtTitle:string="Billing Details";

  toggle(){
      if(this.isActiveContent){
        this.isActiveContent=false;
        this.isActive=true;
      }else{
        this.isActive=!this.isActive;
      }
  }

  contentToggle(){
    if(this.isActive){
      this.isActive=false;
      this.isActiveContent=true;
    }else{
      this.isActiveContent=!this.isActiveContent;
    }
  }
}
