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
  products: Product[] = [{name:"p1",quantity:0}, {name:"p2", quantity:0},
                                {name:"p3", quantity:0}, {name:"p4", quantity:0}]
  date: any;

  selected_products: string[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // fill products array
    // fill costumers array
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad OrderPage');
  }

  trackCostumers(index, costumer) {
    // console.debug(index + " " + costumer);
  }

  trackProduct(index, product) {
  }

  submitOrder(event) {
    console.debug(this.products)
  }

}

interface Product {
  name: string;
  quantity: number; 
}