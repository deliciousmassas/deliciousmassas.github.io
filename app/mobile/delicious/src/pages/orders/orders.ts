import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { OrderPage } from '../order/order';

@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html'
})
export class OrdersPage {
  selectedItem: any;
  icons: string[];
  orders: Array<{icon: string, costumer: string, date: Date, products: Array<{name: string, quantity: number}> }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.orders = [];
    for (let i = 1; i < 11; i++) {
      this.orders.push({
        costumer: 'c ' + i,
        date: new Date(),
        icon: "paper",
        products: [ {name: "p1", quantity: 3} ]
      });
    }
  }

  itemTapped(event, order) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(OrderPage, {
      order: order
    });
  }

  newOrder(event) {
    this.navCtrl.push(OrderPage);
  }
}
