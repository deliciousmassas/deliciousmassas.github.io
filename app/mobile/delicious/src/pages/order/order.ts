import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  costumers: string[] = ["c1", "c2", "c3"];
  products: string[] = ["p1", "p2", "p3", "p4"];
  date: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

  trackCostumers(index, costumer) {
    console.debug(index + " " + costumer);
  }

  trackProduct(index, constumer) {

  }

}
