import { ItemDetailsPage } from './../item-details/item-details';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 items = [
   { description: "item1" },
   { description: "item2" },
   { description: "item3" }
 ];
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }

  itemSelected(item) {
    this.modalCtrl.create(ItemDetailsPage, { item: item }).present();
  }


}
