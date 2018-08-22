import { ItemDetailsPage } from './../item-details/item-details';
import { ModalController } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 items = ['item1', 'item2', 'item3'];
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }

  itemSelected(item) {
    this.modalCtrl.create(ItemDetailsPage, { item: item }).present();
  }


}
