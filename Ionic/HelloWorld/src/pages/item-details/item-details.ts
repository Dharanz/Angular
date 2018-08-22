import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({    
    templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
    item;
    constructor(navParams: NavParams, private vc: ViewController){
        this.item = navParams.get('item');
    }

    cancel() {
        this.vc.dismiss();
    }
}