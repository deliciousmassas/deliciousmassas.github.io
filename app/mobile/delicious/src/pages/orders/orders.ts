import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { OrderPage } from '../order/order';
import { OrderModel } from '../../core/OrderModel';

@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html'
})
export class OrdersPage {
  selectedItem: any;
  icons: string[];
  orders: OrderModel[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.orders = this.loadOrdersFromDb();
    if(navParams.get('order')) {
      let order: OrderModel = navParams.get('order');
      this.orders.push(order);
    }

  }

  loadOrdersFromDb() {
    return []
  }

  itemTapped(event, order) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(OrderPage, {
      order: order
    });
  }

  newOrder(event) {
    this.navCtrl.push(OrderPage, {
      order: new OrderModel()
    });
  }
}
